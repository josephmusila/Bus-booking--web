import { locations } from "../exports.js";
import { validations } from "../exports.js";
//import { all } from "../exports.js";

$(document).ready(function(){
    $("#Nairobi,#Eastern").accordion();
    $("#location,#destination").autocomplete({
        source:locations
        
    });
  /*   $("#submit").click(function(){
       validations();
    }); */
$("#confirm").click(()=>{
  validations();
});

});

 