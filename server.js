const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve Index Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Multer - Multipart form handler
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

// Get submitted file, return file size
app.post('/uploads', upload.single('file'), (req, res) => {
    const filesize = {
        size: req.file.size
    }
    res.send(filesize);
})


app.listen(port);