var sqr;
for(var n=1;n<1000;n++){
    if(n<10){
        sqr=n*n%10;
    }
    else if(n<100){
            sqr=n*n%100;
    }
    else if(n<1000){
        sqr=n*n%1000;
    }
    else{
        sqr=n*n%10000;
    }
    if(sqr===n)
        alert(n*n);
}