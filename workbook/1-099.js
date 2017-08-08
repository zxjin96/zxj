var a,b,c,x;
a=b=c=0;
for(var i=0;i<10;i++){
    x=["32","64","53","87","54","32","98","56","98","83"];
    switch (x%3){
        case 0:a+=x;
        break;
        case 1:b+=x;
            break;
        case 2:c+=x;
            break;
    }
}
alert("a的值是" + a + "," + "b的值是" + b + "," + "c的值是" + c)