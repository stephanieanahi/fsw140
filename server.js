const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/itemsdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

app.use("/items", require("./routes/itemsRouter.js"))

app.listen(9000, () => {
    console.log("The App is listening on port 9000. ")
} );
