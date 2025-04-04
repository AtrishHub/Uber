const http= require('http');
const app = require('./app'); // import your express app
const PORT = process.env.PORT || 3000;
const server=http.createServer(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
