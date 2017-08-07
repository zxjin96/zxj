var sum1=0;
var sum2=0;
var a=[43,534,32,46,75,123,754,213,345,57,234,56,32,5325,56,87];
for(var i=0;i<4;i++)
    for (var j = 0; j < 4; j++) {
        if (i === j)
            sum1 += a[i][j];
        if (i + j === 3)
            sum2 += a[i][j];
    }
        alert("sum1的值为" + sum1);
        alert("sum2的值为" + sum2);
