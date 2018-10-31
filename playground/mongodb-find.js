//const MongoClient = require('mongodb').MongoClient;
const { ObjectID, MongoClient } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to db');
    }
    console.log('connected to server');
    const db = client.db('TodoApp');
    db.collection('todos').find({ _id: new ObjectID("5bd9a004d118f3a5151accee") }).toArray()
        .then((docs) => {
            console.log(docs);
        }, (err) => {
            console.log('Error ', err);
        });

    client.close();
});