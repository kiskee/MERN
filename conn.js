const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://@cluster0.jdduep2.mongodb.net/test?retryWrites=true&w=majority');

const dbobject = mongoose.connection;

dbobject.on('connected', ()=>{
    console.log('Connected ok to mongo db test')
})
dbobject.on('error', ()=>{
    console.log('Connected error')
})

module.exports = mongoose
