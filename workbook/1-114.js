var a,b,c,d,x1,x2;
d=b*b-4*a*c;
if(d>0){
    x1=(-b+sqrt(d))/2;
    x2=(-b-sqrt(d))/2;

}
else if(d=0){
    x1=x2=-b/(2*a);
}
else(
        alert("The equation is not real root");
)
alert("x1=" + x1);
alert("x2=" + x2);