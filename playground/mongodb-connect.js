//const MongoClient = require('mongodb').MongoClient;
const { ObjectID, MongoClient } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to db');
    }
    console.log('connected to server');
    const db = client.db('TodoApp')
        /* db.collection('todos').insertOne({
            text: 'something to do',
            completed: true
        }, (err, result) => {
            if (err) {
                console.log('unable to create collection');
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        }); */
        /* db.collection('Users').insertOne({
            name: 'Abhishek Singh',
            age: 32,
            location: 'Noida'
        }, (err, result) => {
            if (err) {
                console.log('not able to create Users collection');
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
        }); */
    client.close();
});