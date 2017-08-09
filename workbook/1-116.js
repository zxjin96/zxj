var i,j;
for(i=1;i<=4;i++){
    for(j=(4-i)*2;j>0;j--)
        alert(" ");
    for(j=1;j<=2*i-1;j++)
        alert("*" + " ");
}
for(i=3;i>=1;i--){
    for(j=(4-i)*2;j>0;j--)
        alert(" ");
    for(j=1;j<=2*i-1;j++)
        alert("*" + " ");
}