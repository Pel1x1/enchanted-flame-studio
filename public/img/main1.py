import os
from PIL import Image

def compress_and_overwrite_images(directory, quality=50):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.gif', '.tiff')):  # Только форматы с прозрачностью
            img_path = os.path.join(directory, filename)
            try:
                img = Image.open(img_path)
                
                # Сохраняем оригинальный режим с прозрачностью
                if img.mode in ('RGBA', 'LA') or (img.mode in ('P', 'L') and 'transparency' in img.info):
                    # Для RGBA сохраняем как WebP с прозрачностью
                    webp_path = os.path.join(directory, f"{os.path.splitext(filename)[0]}.webp")
                    img.save(webp_path, 'WEBP', quality=quality, method=6)
                else:
                    # Для непрозрачных (JPG) конвертируем в RGB
                    img = img.convert("RGB")
                    webp_path = os.path.join(directory, f"{os.path.splitext(filename)[0]}.webp")
                    img.save(webp_path, 'WEBP', quality=quality, method=6)
                
                os.remove(img_path)
                print(f"Обработано: {filename} -> {os.path.basename(webp_path)}")
            except Exception as e:
                print(f"Ошибка для {filename}: {e}")

compress_and_overwrite_images('/Users/user/Desktop/sites/enchanted-flame-studio/public/img', quality=50)
