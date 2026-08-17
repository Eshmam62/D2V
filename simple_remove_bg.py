from PIL import Image

try:
    img = Image.open('public/startweb.jpeg').convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Convert light grey/off-white background pixels (RGB > 215) to transparent
        if item[0] > 215 and item[1] > 215 and item[2] > 215:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save('public/startweb.png', "PNG")
    print("Background removed and saved to startweb.png")
except Exception as e:
    print(f"Error: {e}")
