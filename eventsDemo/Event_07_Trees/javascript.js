function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

function makeTree(iHeight){
	var sTree = "";

	for(var iCount=1; iCount<=iHeight;iCount++){
		sTree += makeStars(iCount) + "<br />";
	}
	sTree += makeStars(1);
	return sTree;
}


//---------------------------------------------
