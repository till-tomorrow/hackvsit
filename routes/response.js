var checksum = require('../models/checksum');
var config = require('../config/config');
const express = require('express');
const router = express.Router();

	router.post('/', function(req,res){
   console.log("in response post");
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        if(checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY))
        {
              
               console.log("true");
               res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
        }else
        {
           console.log("false");
          res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
        };
//vidisha
  });
  module.exports = router