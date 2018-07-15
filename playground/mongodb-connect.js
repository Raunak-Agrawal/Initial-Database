// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', (err,client) => {
	if(err){
		return console.log('unable to connect');
	}
	console.log('Connected to db server');});
// 	var db = client.db('TodoAppp')
// 	db.collection('Todos').insertOne({
// 		text: 'Raunak Agrawal',
// 		completed : false
// 		//Address : Nepal

// 	}, (err, result) => {
// 		if(err){
// 			return console.log('unable to insert todo');
// 		}
// 		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)); 
// 	});
// 	client.close(); 
// });