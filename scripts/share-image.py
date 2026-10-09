from PIL import Image, ImageDraw, ImageFont, ImageOps
from pathlib import Path
root=Path(__file__).resolve().parent.parent
canvas=Image.new('RGB',(1200,630),'#0b0b0d')
photo=Image.open(root/'originals'/'9bfc631ea84a59302db2ed06b944534f.jpg').convert('RGB')
canvas.paste(ImageOps.fit(photo,(450,630),centering=(.78,.5)),(750,0))
draw=ImageDraw.Draw(canvas)
regular='C:/Windows/Fonts/segoeui.ttf'
bold='C:/Windows/Fonts/segoeuib.ttf'
draw.text((55,50),'nandrade.',font=ImageFont.truetype(bold,42),fill='#f5f3ef')
draw.text((55,205),'Imagens que\nprendem.',font=ImageFont.truetype(regular,66),fill='#f5f3ef',spacing=0)
draw.text((55,360),'Histórias que ficam.',font=ImageFont.truetype(regular,54),fill='#c6f36a')
draw.line((55,514,695,514),fill='#353539',width=1)
draw.text((55,545),'EDIÇÃO · FOTOGRAFIA · DIREÇÃO AUDIOVISUAL',font=ImageFont.truetype(regular,20),fill='#a3a3aa')
canvas.save(root/'dist'/'assets'/'share.jpg',quality=90,optimize=True)
print('Share image: 1200 × 630')
