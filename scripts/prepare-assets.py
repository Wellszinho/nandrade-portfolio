from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json, urllib.request

root = Path(__file__).resolve().parent.parent
originals = root / 'originals'
assets = root / 'dist' / 'assets'
names = ['ce0b63a7475007baec29b1b7b4409b7a', '03bd4d2a1373b89b122880064866b241', '3d5cf586a65038d53458e4f527190b6d', '8457ec292527175687d989e3ea6b90c9', '9f8454b6b5993b7d4edc9759a48da7cc', '0bd9d43602db34f61004fea8a9671a33', '9766debb3c7e0b656bc15520f06973a9','86269b84a98660e337b2ac6770b292e1','57496e4f2be22e7dcb7c0936973bf2de','7ee1542448429db20e0e304e029c2cc0','ccce481ed5002460514107e6b37ed038','d88da60dd7101f06aa119a94e66008cf','0e0e4d657327c66660ca6828dfada85c','a357586696ff1e29541f3f0bf110e638']
for name in names:
    p = originals / (name + '.jpg')
    if not p.exists():
        print('Not bundled:',p.name)

for video in ['0x2chpmUzfM','3mdVNiQyalA','xjP5-GA-NhU','YPinGm8vjJY']:
    try:
        url = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + video + '&format=json'
        data = json.load(urllib.request.urlopen(url))
        (root / 'docs' / (video + '.json')).write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
        if not (originals / (video + '.jpg')).exists():
            urllib.request.urlretrieve(data['thumbnail_url'], originals / (video + '.jpg'))
        if video=='0x2chpmUzfM' and not (originals / (video + '-maxres.jpg')).exists():
            urllib.request.urlretrieve('https://i.ytimg.com/vi/'+video+'/maxresdefault.jpg',originals / (video + '-maxres.jpg'))
    except Exception as e:
        print('YouTube metadata unavailable:',video,str(e))

photos = []
for p in originals.iterdir():
    if p.suffix.lower() not in ['.jpg','.png']: continue
    with Image.open(p) as im:
        im = ImageOps.exif_transpose(im).convert('RGB')
        im.thumbnail((1600,1600))
        im.save(assets / (p.stem + '.webp'),'WEBP',quality=85,method=6)
        photos.append((p.name,im.copy()))

sheet = Image.new('RGB',(1000,((len(photos)+4)//5)*160),(28,28,28))
d=ImageDraw.Draw(sheet)
for i,(name,im) in enumerate(photos):
    im.thumbnail((190,125))
    x,y=(i%5)*200,(i//5)*160
    sheet.paste(im,(x+(190-im.width)//2,y))
    d.text((x+4,y+130),name[:16],fill='white')
sheet.save(root/'docs'/'contact-sheet.jpg')
print('Optimized',len(photos),'images')
