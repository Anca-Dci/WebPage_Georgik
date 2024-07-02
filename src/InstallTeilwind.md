https://tailwindcss.com/docs/installation
1.npm init -y 2. install tailwindcss
npm install -D tailwindcss 3. create tailwind.config.js
npm install -D tailwindcss 4. update tailwind.config.js
content: ["./src/**/*.{html,js}"], 5. create src folder and add input.css, index.html 6. copy this code to input.css
@tailwind base;
@tailwind components;
@tailwind utilities; 7. in package.json:
"start":"npx tailwindcss -i ./src/input.css -o ./src/output.css --watch" 8. copy this code to index.html :

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

9. start
   npm run start (bearbeitet)

comanda pentru update node ~ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
