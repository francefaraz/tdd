const cors=require("cors");
const dict1=require("./routes/dict1")
const connection=require('./db')
const  express = require('express');
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
connection()
app.use("/api",dict1)
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(` app listening on port ${port}!`))

module.exports = app;
