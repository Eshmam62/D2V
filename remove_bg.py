from rembg import remove
from PIL import Image

try:
    input_img = Image.open('public/startweb.jpeg')
    output_img = remove(input_img)
    output_img.save('public/startweb.png')
    print("Background removed successfully")
except Exception as e:
    print(f"Error: {e}")
