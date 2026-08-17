from PIL import Image
import os

img = Image.open('public/footerlogo.jpeg').convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # Replace white/near-white pixels with transparent alpha
    if item[0] > 220 and item[1] > 220 and item[2] > 220:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('public/footerlogo.png', "PNG")
print("Successfully generated public/footerlogo.png")
