var i,j;
for(i=1;i<=5;i++) {
    for (j = (5 - i) * 2; j > 0; j--)
        alert(" ");
    for (j = 1; j <= 2 * i - 1; j++)
        alert(i + " ");
}