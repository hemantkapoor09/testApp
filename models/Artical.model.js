var mongoose =require('mongoose');
var Schema =mongoose.Schema;
// var db=mongoose.connection;
var ArticalSchema = new Schema({

		art_no:String,

		belt_no:Number,
		belt_typ:String,
		belt_no2:Number,
		belt_typ2:String,
		belt_no3:Number,
		belt_typ3:String,

		th_no:Number,
		th_size:String,
		th_color:String,
		
		buckel_no :Number,
		buckel_typ :String,
		buckel_color :String,

		hh_no1:Number,
		hh_typ1:String,
		hh_no2:Number,
		hh_typ2:String,
		hh_color:String,

		zip_no1:Number,
		zip_typ1:String,
		zip_no2:Number,
		zip_typ2:String,
		zip_color:String,
		
		runner_no1:Number,
		runner_typ1:String,
		runner_no2:Number,
		runner_typ2:String,
		runner_color:String,

		washer_no:Number,
		washer_color:String,

		cap_no:Number,
		cap_color:String,

		tich_q:Number,
		tich_typ:String,
		tich_colr:String,

		antstud_no:Number,
		frame_no:Number,
		pipe_no:Number,
		
		dh_q:Number,
		dh_typ:String,

		dh_pti_q:Number,
		
		wellcro_clr:String,
		wellcro_typ:String,
		wL_q:Number,
		wH_q:Number,
		
		ilet_q:Number,
		ilet_colr:String,
		ilet_typ:String,
		
		tchain_q:Number,
		tchain_typ:String,
		tchain_colr:String,
		
		jhook_q:Number,
		jhook_colr:String,

		leather_q:Number,
		leatherTyp:String,
		leather_q2:Number,
		leatherTyp2:String,

		green_q:Number,
		green_typ:String,

		rivtTyp:String,
		rivet_color:String,

		rivtSize1:String,
		rivet_q1:Number,

		rivtSize2:String,
		rivet_q2:Number,

		rivtSize3:String,
		rivet_q3:Number,

		rivtSize4:String,
		rivet_q4:Number
		
})
module.exports =mongoose.model('Artical',ArticalSchema);