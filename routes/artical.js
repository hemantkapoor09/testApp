var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo =require('mongodb');
var morgan =require('morgan');

var Artical =require('../models/Artical.model')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artical', { title: 'Kapoorz App' });
});
router.get('/new', function(req, res, next) {
  res.render('addArtical', { title: 'Kapoorz App' });
});

router.post('/new',function(req, res){
		var newArtical = new Artical();
	newArtical.art_no = req.body.art_no;
	
	newArtical.belt_no = req.body.belt_q;
	newArtical.belt_typ = req.body.belt_typ;
	newArtical.belt_no2 = req.body.belt_q2;
	newArtical.belt_typ2 = req.body.belt_typ2;
	newArtical.belt_no3 = req.body.belt_q3;
	newArtical.belt_typ3 = req.body.belt_typ3;
	
	newArtical.th_no = req.body.th_q ;
	newArtical.th_size = req.body.th_size ;
	newArtical.th_color = req.body.th_typ;

	newArtical.buckel_no = req.body.buckel_q ;
	newArtical.buckel_typ = req.body.buckel_typ ;
	newArtical.buckel_color = req.body.buckel_color;

	newArtical.hh_no1 = req.body.hh_q1;
	newArtical.hh_typ1 = req.body.hh_typ1;
	newArtical.hh_no2 = req.body.hh_q2;
	newArtical.hh_typ2 = req.body.hh_typ2;
	newArtical.hh_color = req.body.hh_color;

	newArtical.zip_no1 = req.body.zip_q1;
	newArtical.zip_typ1 = req.body.zip_typ1;
	newArtical.zip_no2 = req.body.zip_q2;
	newArtical.zip_typ2 = req.body.zip_typ2;
	newArtical.zip_color = req.body.zip_color;

	newArtical.runner_no1 = req.body.runner_q1;
	newArtical.runner_typ1 = req.body.runner_typ1;
	newArtical.runner_no2 = req.body.runner_q2;
	newArtical.runner_typ2 = req.body.runner_typ2;
	newArtical.runner_color = req.body.runner_color;

	newArtical.tich_q = req.body.tich_q ;
	newArtical.tich_typ = req.body.tich_typ;
	newArtical.tich_colr = req.body.tich_colr;

	newArtical.tchain_q = req.body.tchain_q ;
	newArtical.tchain_typ = req.body.tchain_typ;
	newArtical.tchain_colr = req.body.tchain_colr;
	
	newArtical.jhook_q = req.body.jhook_q ;
	newArtical.jhook_colr = req.body.jhook_colr;

	newArtical.dh_q = req.body.dh_q;
	newArtical.dh_typ = req.body.dh_typ;
	newArtical.dh_pti_q = req.body.dh_pti_q;
	
	newArtical.wellcro_clr = req.body.wellcro_clr;
	newArtical.wellcro_typ = req.body.wellcro_typ;
	newArtical.wL_q = req.body.wL_q;
	newArtical.wH_q = req.body.wH_q;

	newArtical.ilet_q= req.body.ilet_q;
	newArtical.ilet_colr= req.body.ilet_colr;
	newArtical.ilet_typ= req.body.ilet_typ;

	newArtical.washer_no = req.body.washer_q ;
	newArtical.washer_color = req.body.washer_typ;

	newArtical.green_q = req.body.green_q;
	newArtical.green_typ = req.body.green_typ ;

	newArtical.antstud_no = req.body.antstud_q ;

	newArtical.frame_no = req.body.frame_q ;
	
	newArtical.pipe_no = req.body.pipe_q ;

	newArtical.cap_no = req.body.cap_q ;
	newArtical.cap_color = req.body.cap_typ;
	
	newArtical.leather_q= req.body.leather_q;
	newArtical.leatherTyp= req.body.leatherTyp;
	newArtical.leather_q2= req.body.leather_q2;
	newArtical.leatherTyp2= req.body.leatherTyp2;

	newArtical.rivtTyp = req.body.rivtTyp;
	newArtical.rivet_color = req.body.rivet_color;

	newArtical.rivtSize1 = req.body.rivtSize1;
	newArtical.rivet_q1 = req.body.rivet_q1;
	
	newArtical.rivtSize2 = req.body.rivtSize2;
	newArtical.rivet_q2 = req.body.rivet_q2;
	
	newArtical.rivtSize3 = req.body.rivtSize3;
	newArtical.rivet_q3 = req.body.rivet_q3;
	
	newArtical.rivtSize4 = req.body.rivtSize4;
	newArtical.rivet_q4 = req.body.rivet_q4;

		newArtical.save(function(err,jmd){
			if(err){
				res.send('error in saving ARTICAL');
			}else{
				console.log(jmd);
				res.redirect('/artical');
				// mongoose.connection.close();	
			}
		});

});

router.get('/view', function(req,res){
	mongoose.model('Artical').find(function(error,articals){
	 	articals = articals;
			if(1>articals.length){res.redirect('/artical');}
			
			res.render('viewArticals', {title: 'Kapoorz App', articals:articals});
		});
});

// router.get('/delete/:id', function(req,res){
//           // id = req.params.id;
// 	Artical.findByIdAndRemove(req.params.id).exec();
// 		res.redirect('/artical');
// });
module.exports = router;
