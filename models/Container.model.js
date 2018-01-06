var Artical =require('./Artical.model')

var mongoose =require('mongoose');
var Schema =mongoose.Schema;
// var db=mongoose.connection;
var ContainerSchema = new Schema({
		container_no:String,
		date:String,
		time:String,
		art:String
		
})
module.exports = mongoose.model('Container',ContainerSchema);


			// belt_no
			// th_no
			// th_color
			// hh_no
			// hh_color
			// washer_no
			// washer_color
