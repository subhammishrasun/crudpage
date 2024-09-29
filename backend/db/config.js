const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/e-commerce");

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');

    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names);
    });
});
