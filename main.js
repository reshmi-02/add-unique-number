let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");

var uni=parseInt(prompt("enter the number"));

//function
function unique(){
    var b=[];
 for(let i=0;i<arr.length;i++){
	b.push(arr[i]+uni);
 }
 return b;
}

var res=unique();
document.write("add unique number in an array is "+res);