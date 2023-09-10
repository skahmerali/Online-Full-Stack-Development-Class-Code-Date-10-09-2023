const express = require('express')
const app = express();
const port = 5000;
require('./DB/Connection');
const userRouter = require('./Routes/UserRoute')
const path = require('path')

app.use(express.json());
app.use(userRouter)
app.use(express.static(path.resolve(path.join(__dirname,"public"))))



app.listen(port, () => {
    console.log('Server is Listening on', port);
})