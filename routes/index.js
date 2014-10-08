
/*
 * GET home page.
 ***********************************************************/
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cmpe273");
var routeschema = new mongoose.Schema({
	category: String,
	brand : String,
	dualBand : String,
	price : String,
	range : String,
	numberofwifi : Number,
	desc : String	
});
var route = mongoose.model('routers',routeschema);

var carschema = new mongoose.Schema({
	make: String,
	model: String,
	mileage: String,
	yom : Number,
	condition: String,
	price : String,
	desc : String	
});
var carmongo = mongoose.model('cars',carschema);

var npschema = new mongoose.Schema({
	
	category:String,
	company:String,
	rate: Number,
	
});
var npmongo = mongoose.model('routers',npschema);

var monk = require('monk');
var db = monk('localhost:27017/cmpe273');

//exports.nailpolish = function(req,res){
//	var db = req.db;
//	console.log("my db name is " + db);
//	var collection = db.get('nailpolish');
//	collection.find({},{},function(e,docs){
//		res.render('nailpolish',{"test1":docs});
//		});  
//};

/*****************************************************************************************/
exports.index = function(req, res){
	res.redirect('/store');

	console.log('Redirected to ***** Store ***** index page');
};
exports.store = function(req, res){
	res.render('index');
	console.log('Rendered ***** index ****** page');
};


exports.nailpolish = function(req, res){
	npmongo.find({category:"polish"},function(err,docs){
		if (err){
			console.log(err);
		}else
		console.log(docs);
		res.render('nailpolish',{"test1":docs});
	});
	console.log('*************Nail polish ******************* page');
};	


exports.cars = function(req, res){
	// var cars2 = req.app.get('cars2');
	carmongo.find({},function(err,docs){
		console.log(docs);
				res.render('cars',{cars:docs});
			});
			  //res.render('routers');
			  console.log('Rendered *************cars ************** page');
					};		
		
exports.routers = function(req, res){
	// var cars2 = req.app.get('cars2');
	route.find({category:"routers"},function(err,docs){
		console.log(docs);
		res.render('routers',{router:docs});
	});
	  //res.render('routers');
	  console.log('Rendered *************** routers  ************page');
			};
/******************************************************************************************/
exports.rdisplay = function(req,res){
	var iddata = req.params.id;
	route.findOne({brand:iddata},function(err,docs){
		res.render('idr',{data:docs});
	});

};
exports.cdisplay = function(req,res){
	var iddata = req.params.id;
	carmongo.findOne({model:iddata},function(err,docs){
		res.render('id',{data:docs});
	});

};

exports.pdisplay = function(req,res){

	var iddata = req.params.id;
	route.findOne({company:iddata,category:"polish"},function(err,docs){
		console.log(docs);
		res.render('idp',{data:docs});
		
		
	});

};