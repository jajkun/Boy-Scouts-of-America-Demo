function calculate(number){
	var numberToString="";
	numberToString = number.toString();
	var arrayHoldNumber = [];
	var sumAfterMultple=0;

	for(var i in numberToString){
		arrayHoldNumber.push(numberToString[i]);
	}
	//console.log( arrayHoldNumber );

	var length = arrayHoldNumber.length;
	sumAfterMultple=multiply(arrayHoldNumber);
	if(length > 1){
		//console.log( sumAfterMultple );
		return calculate( sumAfterMultple );
	}
	if(length == 1){
		//console.log( sumAfterMultple );
		return sumAfterMultple;
	}
}//calculate


function multiply(array){
	var sum=1;
	for(var j in array){
		sum = array[j]*sum;
	}//for
	return sum;
}

//var a=[2,3];
//console.log( multiply(a) );

console.log( calculate(27) );