// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', (err,client) => {
	if(err){
		return console.log('unable to connect');
	}
	console.log('Connected to db server');
	var db = client.db('TodoAppp');
// 	db.collection('Todos').find({completed : true}).toArray().then((docs) => {

// 		console.log('Todos');
// 		console.log(JSON.stringify(docs,undefined,2))
// 	},(err) =>  {
// 		console.log('Unable to fetch');
// 	} );
		
// 	//client.close(); 
// });

db.collection('Todos').find({completed : false}).toArray().then((docs) => {

	console.log(JSON.stringify(docs,undefined,2));

});
});
