var n=prompt("please inpout a integer number","");
var total=0,sum;
for(var i=1;i<=n;i++){
    sum=0;
    for(var j=1;j<=i;j++)
        sum+=j;
    total+=sum;
}
alert("Total is " +  total);