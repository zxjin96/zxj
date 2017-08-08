var a,b,c,s;
if((a+b<=c)||(a+c<=b)||(b+c<=a)||a<=0||b<=0||c<=0){
    alert("Data Error!");
}
else{
    s=(a+b+c)/2;
    alert("There area is" + sqrt(s*(s-a)*(s-b)*(s-c)));
}