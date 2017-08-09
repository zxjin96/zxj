var salary=prompt("please input salary","");
alert("100yuan:" +salary/100);
if(salary %=100){
    alert("50yuan:" +salary/50);
}
else if(salary=salary-50*(salary/50)){
    alert("20yuan:" +salary/20);
}
else if(salary=salary-20*(salary/20)){
    alert("10yuan:" +salary/10);
}
else if(alary %=10){
    alert("5yuan:" +salary/5);
}
else if(salary=salary-5*(salary/5)){
    alert("2yuan:" +salary/2);
}
else{
    alert("1yuan:" + salary);
}
