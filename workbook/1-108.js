var discount;
var money=prompt("Please input sum of money","");
if(money<1000){
    discount=money;
}
else if(money<2000){
    discount=0.95*money;
}
else if(money<3000){
    discount=0.9*money;
}
else if(money<5000){
    discount=0.85*money;
}
else{
    discount=0.8*money;
}
alert("The total money is " + discount);