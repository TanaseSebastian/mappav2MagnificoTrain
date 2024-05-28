import os
import json

def generate_image_paths(parent_folder):
    categories = ["STS_FUNTRAIN", "DOTTO_TRAINS", "ARTIGIANFERRO"]
    image_paths = {category: [] for category in categories}

    for category in categories:
        folder_path = os.path.join(parent_folder, category)
        if os.path.exists(folder_path):
            for filename in os.listdir(folder_path):
                if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                    relative_path = os.path.join(folder_path, filename)
                    image_paths[category].append(relative_path.replace("\\", "/"))

    with open('imagePaths.json', 'w') as json_file:
        json.dump(image_paths, json_file, indent=4)

    print("imagePaths.json file generated successfully.")

if __name__ == "__main__":
    parent_folder = "STATIC/assets/img/GALLERIA"
    generate_image_paths(parent_folder)
