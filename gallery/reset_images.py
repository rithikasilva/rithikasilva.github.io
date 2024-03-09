# I'm lazy so I just run this to hardcode the image values in gallery.js
# Note that the photos are named in the format YYYYMMDD_HHMMSS.jpg
import os

directory = 'photos/'
file_path = 'gallery.js'

file_list = []
for root, dirs, files in os.walk(directory):
    for file in files:
        file_list.append(os.path.join(root, file))

start = "const imageList = ["
end = "];\n"
file_list.reverse()
for file in file_list:
    start = start + '{ src: '+ f'"{file}"' + ', alt: "image" }, '
new_line =  start +  end

with open(file_path, 'r') as file:
    lines = file.readlines()
lines[0] = new_line
with open(file_path, 'w') as file:
    file.writelines(lines)

