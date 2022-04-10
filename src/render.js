const fs = require(`fs`);

class Render {

    renderPage(output) {
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
        console.log(output);
        // For each object inside the output, loop through and create a template html card based on object's role property. Use Switch case
        for (let i = 0; i < output.length; i++) {
            switch (output[i].getRole()) {
                case "Manager":
                    template += `<div class="managerCard max-w-sm rounded border shadow-lg p-3 min-w-[30%] m-4">
                <header class="bg-blue-300 border rounded font-semibold text-center">
                    <div class="text-3xl my-1 p-2">
                        <p>${output[i].getName()}</p>
                    </div>
                    <div class="text-2xl my-1 p-2">
                        <i class="fa-solid fa-clipboard"></i> Manager
                    </div>
                </header>
                <div>
                    <ul class="list-none my-2">
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">ID:</span> ${output[i].getID()}</li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">Office Number:</span> ${output[i].getOffice()}</li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">Email:</span>  <a class="hover:text-blue-700" href="mailto:${output[i].getEmail()}">${output[i].getEmail()}</a></li>
                    </ul>
                </div>
            </div>`
                    break;
                case "Engineer":
                    template += `<div class="engiCard max-w-sm rounded border shadow-lg p-3 min-w-[30%] m-4">
                <header class="bg-blue-300 border rounded font-semibold text-center">
                    <div class="text-3xl my-1 p-2">
                        <p>${output[i].getName()}</p>
                    </div>
                    <div class="text-2xl my-1 p-2">
                        <i class="fa-solid fa-shuttle-space"></i> Engineer
                    </div>
                </header>
                <div>
                    <ul class="list-none my-2">
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">ID:</span> ${output[i].getID()}</li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">Email:</span>  <a class="hover:text-blue-700" href="mailto:${output[i].getEmail()}">${output[i].getEmail()}</a></li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">Github:</span>  <a class="hover:text-blue-700" href="https://github.com/${output[i].getGithub()}">${output[i].getGithub()}</a></li>
                    </ul>
                </div>
            </div>`
                    break;
                case "Intern":
                    template += `<div class="internCard max-w-sm rounded border shadow-lg p-3 min-w-[30%] m-4">
                <header class="bg-blue-300 border rounded font-semibold text-center">
                    <div class="text-3xl my-1 p-2">
                        <p>${output[i].getName()}</p>
                    </div>
                    <div class="text-2xl my-1 p-2">
                        <i class="fa-solid fa-glasses"></i> Intern
                    </div>
                </header>
                <div>
                    <ul class="list-none my-2">
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">ID:</span> ${output[i].getID()}</li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">School:</span> ${output[i].getSchool()}</li>
                        <li class="border my-1 py-1 px-2"><span class="font-semibold">Email:</span>  <a class="hover:text-blue-700" href="mailto:${output[i].getEmail()}">${output[i].getEmail()}</a></li>
                    </ul>
                </div>
            </div>`
                    break;
            };
        };

        // Closing tags for html template.
        template += `</div>
    </body>
    </html>`;

        // Write template contents to index.html file within the dist folder 
        fs.writeFile(`./dist/index.html`, template, (err) => {
            err ? console.error(err) : console.log('File created successfully!')
        });
    }
};

module.exports = Render;