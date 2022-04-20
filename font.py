import os

os.system(
    "pyftsubset \"./src/fonts/origin/MiSans-Bold.ttf\" --text=$(rg -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n') --no-hinting"
)

os.system(
    "pyftsubset \"./src/fonts/origin/MiSans-Light.ttf\" --text=$(rg -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n') --no-hinting"
)

os.system(
    "pyftsubset \"./src/fonts/origin/MiSans-Regular.ttf\" --text=$(rg -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n') --no-hinting"
)

os.system(
    "fonttools ttLib.woff2 compress -o ./src/fonts/MiSans-Bold.woff2 ./src/fonts/origin/MiSans-Bold.subset.ttf"
)

os.system(
    "fonttools ttLib.woff2 compress -o ./src/fonts/MiSans-Light.woff2 ./src/fonts/origin/MiSans-Light.subset.ttf"
)

os.system(
    "fonttools ttLib.woff2 compress -o ./src/fonts/MiSans-Regular.woff2 ./src/fonts/origin/MiSans-Regular.subset.ttf"
)
