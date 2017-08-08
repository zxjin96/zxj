var count=0;
for(var i=9;i>=1;i--)
    for(var j=9;j>=0;j--)
        if(i===j){
        }
        else {
            for (var k = 0; k <= 9; k++)
                if ((k !== i) && (k !== j))
                    count++;
        }
alert(count);