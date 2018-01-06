var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo =require('mongodb');
var morgan =require('morgan');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/kapoorz_app';

var Artical =require('../models/Artical.model')
var Container =require('../models/Container.model')
var hex = /[0-9A-Fa-f]{6}/g;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) { 
	res.render('container', {title: 'Kapoorz App'});
});


router.get('/new', function(req, res) 
	{ 
		mongoose.model('Artical').find(function(err,articals){
	 	articals = articals;
		res.render('addContainer', {title: 'Kapoorz App', articals:articals});
		});
	});

router.post('/new', function(req, res) 
	{ 
	 var newContainer = new Container();
		newContainer.container_no=req.body.container_no;
		newContainer.date=req.body.date;
		newContainer.time=req.body.time;
		newContainer.art=req.body.art_no;
		console.log(newContainer);
			newContainer.save(newContainer); //.save diya
		res.redirect('/container');
	});

router.get('/view', function(req,res){
	mongoose.model('Container').find(function(error,containers){
	 	containers = containers;
			if(1>containers.length){res.redirect('/container');}
			
			res.render('viewContainers', {title: 'Kapoorz App', containers:containers});
		});
});
router.get('/delete/:id', function(req,res){
          // id = req.params.id;
	Container.findByIdAndRemove(req.params.id).exec();
		res.redirect('/container');
  });

// eh hai wda seyapa
router.post('/cDetails/:art_no/cut/:cont', function(req,res){
	za = req.params.art_no;
	cza = req.params.cont; 
	temp=za.split(',');
	var count=temp.length-1;
	var findArts= new Array;

	temp.forEach(function(tempp){
		Artical.find({'art_no': tempp}, function(err, docs){
	     findArts.push(docs[0]);

	 	if(count===0){
	 		
			res.render('consolidateContainer', {title: 'Kapoorz App', findArts:findArts,cza:cza});
	    }
		count--;
		});//find function

	});//for each di
		
	// temp.forEach(function(temp){
	// 	Artical.find({'art_no': [temp]}, function(err, docs){
	//      findArts.push(docs);
	// 	console.log(findArts);
	// 	});
	// });
	// console.log(findArts);

		// console.log(findArts);

});
module.exports = router;


function abc(){	
		//th_color
	var idHex = document._id.toHexString();
		articals.forEach(function(a)
		{
			if(a.th_color=='nickel'){nic=nic+1;}
			else if(a.th_color=='black'){blk=blk+1;}
			else if(a.th_color=='antique'){antk=antk+1;}
			else{console.log("hat ni lga kuch");}
		})//for each
	console.log("\n\nloji eh sab lga\nnick-->"+nic+"\nblk--->"+blk+"\nanttq-->"+antk);
}

// // att
// userSchema.find({}, function(err, users) {
//     if (err) throw err;
//     users.forEach(function(u,i){
//         var users = [];
//         jobSchema.find({u_sno:s.u.sno}, function(err, j) {
//             if (err) throw err;
//             if (!u) {
//                 res.end(JSON.stringify({
//                     status: 'failed:Auction not found.',
//                     error_code: '404'
//                 }));
//                 console.log("User not found.");
//                 return 
//             }
//             users.push(j);
//         })
//     })
//     res.send(JSON.stringify({status:"success",message:"successfully done",data:{jobs:j,users:u}}));
// })
// // smjdar
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// userSchema.find({}).then(function(users) {
//   var jobQueries = [];

//   users.forEach(function(u) {
//     jobQueries.push(jobSchema.find({u_sno:s.u.sno}));
//   });

//   return Promise.all(jobQueries );
// }).then(function(listOfJobs) {
//     res.send(listOfJobs);
// }).catch(function(error) {
//     res.status(500).send('one of the queries failed', error);
// });


	//Artical.find({'art_no': { $in:[mongoose.Types.ObjectId(za)]}}, function(err, docs){
 		//console.log(docs);
		//res.send(docs);
	//});

	// console.log(mongoose.model('Artical').find({art_no:req.params.art_no}));//.find artical mong
