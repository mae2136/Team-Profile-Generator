const fs = require(`fs`);

function renderPage(obj) {
    // HTML template Header code goes in to template variable
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/d22eada13e.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="container flex bg-green-500 py-3 mx-auto justify-center">
            <h1 class="text-5xl font-bold">My Team</h1>
        </header>
        <div class="container flex flex-wrap justify-around p-3">`;

    // For each object inside the output, loop through and create a template html card based on object's role property. Use Switch case
    obj.forEach(element => {
        console.log(obj[element]);
    });

    // Closing tags for html template.
    template += `</div>
    </body>
    </html>`;

    // Write template contents to index.html file within the dist folder 
    fs.writeFile(`./dist/index.html`, template, (err) => {
        err ? console.error(err) : console.log('File created successfully!')
    });
};


module.export = renderPage()