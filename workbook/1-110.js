    var dig=["","","","",""];
    var num=prompt("Please input a integer","");
    dig[0]=num/10000;
    dig[1]=num%10000/1000;
    dig[2]=num%1000/100;
    dig[3]=num%100/10;
    dig[4]=num%10;
    if((dig[0]===dig[4])&&(dig[1]===dig[3])){
        alert(num + " is a recycle number");
    }
   else{
        alert(num + " is not a recycle number");
    }





