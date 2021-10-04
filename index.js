const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000; // Can also set to 443 or 80

// Forces the HTTPS version of the website
// if (process.env.NODE_ENV === 'production') {
//     app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https') {
//         res.redirect(`https://${req.header('host')}${req.url}`)
//     } else {
//         next()
//     }
//     })
// }

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Used to load the site
});

// // Used to redirect to the about page
// app.get('/about', (req, res) => {
//     res.sendFile(__dirname + "/about.html");
// });

// // Used to open resume
// app.get('/resume', (req, res) => {
//     res.sendFile(__dirname + '/resume.pdf');
// });

// // Used to redirect to the pictures page
// app.get('/pictures', (req, res) => {
//     res.sendFile(__dirname + '/pictures.html');
// });

// // Used to redirect to the Jekyll blog when it's up
// app.get("/blog", (req, res) => {
//     res.redirect("https://jinsung-kim.github.io/");
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));