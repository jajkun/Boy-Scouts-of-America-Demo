function one(){
	return 1;
}

function two(){
	return 2;
}

function plus(a,b){
	return a()+b();
}

console.log( plus(one,two) );