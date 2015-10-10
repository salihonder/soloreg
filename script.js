/*
	SoloReg v0.1
	Simple JavaScript Regex Online Editor
	(c) 2013-2015 Salih Onder <http://singlereport.net>
	The MIT License (MIT)
	script.js
*/

function execute(){

	removeOutput();
		
    console.log("run");
var test_sentence_string = document.getElementById("id_textbox_test_sentence").value;
var regExpBox = document.getElementById("id_textbox_pattern").value;
var regExpModBox = document.getElementById("id_textbox_modifier").value;
    

	if(isModValid(regExpModBox)){
		var patt1=new RegExp(regExpBox,regExpModBox);
	
    if(isNotEmpty(regExpBox) && isNotEmpty(test_sentence_string)){
	 console.log("run active ");
		
       var result  = test_sentence_string.match(patt1);
	   if(isNotEmpty(result)){
		putOutput(result);
	   }
        
    } else {
        return;
    }
    }
}

function isNotEmpty(txtBox){
        return (txtBox != null && txtBox != "" && typeof txtBox != 'undefined');
}

function isModValid(txtBoxMod){
	return (txtBoxMod == "" || txtBoxMod == "g" || txtBoxMod == "i" || txtBoxMod == "ig" || txtBoxMod == "gi");
}

function putOutput(result){

 console.log("put");
  //for (var i in result) {
  for(var i = 0; i< result.length; i++){
    if(isNotEmpty(result[i])){
        var node=document.createElement("LI");
        var textnode=document.createTextNode(result[i]);
        node.appendChild(textnode);
        document.getElementById("id_box_match_results").appendChild(node);
    }  
  }
}

function removeOutput(){
 console.log("remove");
    //for (var i in result) {
	//if(result[i] != null && result[i] !=""){
		//var list=document.getElementById("id_box_match_results");
        //if(list.childNodes[1] != null){
           // list.removeChild(list.childNodes[1]);
        //}
		//}

    //}
	 var list=document.getElementById("id_box_match_results")
   
	while(list.childNodes[0] != null){
	console.log("removed........");
		list.removeChild(list.childNodes[0]);
	}
}

