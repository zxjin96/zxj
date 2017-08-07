var a=30;
var b=60;
if(a<b){
    a=a+b;
    b=a-b;
    a=a-b;
}
alert("a的值为" + a);
alert("b的值为" + b);