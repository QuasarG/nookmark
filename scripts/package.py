from pathlib import Path
from tempfile import TemporaryDirectory
from zipfile import ZipFile, ZIP_DEFLATED
import os
import shutil
import struct
import subprocess

root = Path(__file__).resolve().parent.parent
chrome_binary = os.environ.get('CHROME_BIN') or shutil.which('google-chrome-stable') or shutil.which('google-chrome') or shutil.which('chromium')
if not chrome_binary:
    raise SystemExit('找不到 Chrome，请通过 CHROME_BIN 指定可执行文件。')

files = [root / name for name in ['LICENSE', 'THIRD_PARTY_NOTICES.md', 'manifest.json', 'newtab.html', 'newtab.css', 'newtab.js', 'preferences.js', 'logo.svg', 'icon16.png', 'icon48.png', 'icon128.png']]
files += [path for folder in ['fonts', 'assets'] for path in sorted((root / folder).rglob('*')) if path.is_file()]
key_directory = root / '.extension-signing'
key_directory.mkdir(mode=0o700, exist_ok=True)
key_directory.chmod(0o700)
key = key_directory / 'nookmark.pem'

with TemporaryDirectory(prefix='nookmark-package-') as temporary:
    stage = Path(temporary) / 'nookmark'
    stage.mkdir()
    for source in files:
        destination = stage / source.relative_to(root)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
    command = [chrome_binary, '--headless', '--no-sandbox', '--no-message-box', '--disable-gpu', '--user-data-dir=' + str(Path(temporary) / 'profile'), '--pack-extension=' + str(stage)]
    if key.exists():
        command.append('--pack-extension-key=' + str(key))
    result = subprocess.run(command, capture_output=True, text=True, timeout=90)
    package = Path(temporary) / 'nookmark.crx'
    if result.returncode or not package.exists():
        raise SystemExit('CRX 打包失败：' + result.stderr[-2000:])
    data = package.read_bytes()
    if data[:4] != b'Cr24' or struct.unpack_from('<I', data, 4)[0] != 3:
        raise SystemExit('生成的文件不是 CRX3。')
    if not key.exists():
        generated_key = Path(temporary) / 'nookmark.pem'
        if not generated_key.exists():
            raise SystemExit('未生成签名密钥。')
        descriptor = os.open(key, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
        with os.fdopen(descriptor, 'wb') as destination:
            destination.write(generated_key.read_bytes())
    key.chmod(0o600)
    shutil.copyfile(package, root / 'nookmark.crx')

with ZipFile(root / 'nookmark.zip', 'w', ZIP_DEFLATED) as package:
    for source in files:
        package.write(source, source.relative_to(root))
print('已生成 nookmark.crx 和 nookmark.zip，包含 ' + str(len(files)) + ' 个扩展文件。')
print('签名密钥保存在 .extension-signing/nookmark.pem；已排除在 Git 和安装包之外。')
