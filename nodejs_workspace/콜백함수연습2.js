function myfunction(callback, xvalue, yvalue){
	callback(xvalue, yvalue);
}

var add=function( xvalue, yvalue){
	console.log(xvalue+yvalue);
}

var sub=function( xvalue, yvalue){
	console.log(xvalue-yvalue);
}

var mul=function( xvalue, yvalue){
	console.log(xvalue*yvalue);
}

var div=function( xvalue, yvalue){
	console.log(xvalue/+yvalue);
}

myfunction(add, 10, 30);
myfunction(sub, 10, 30);
myfunction(mul, 10, 30);
myfunction(div, 10, 30);
