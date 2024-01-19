import mongoose from "mongoose";

mongoose.connect("mongodb://LocalHost/companiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))