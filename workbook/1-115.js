for(var i=0;i<50;i++)
    for(var j=i;j<50;j++)
        for(var k=0;k<50;k++)
            if((i+j+k)&&(i+k>j)&&(k+j>i)&&(i*j+j*j===k*k))
                alert("i=" +i +"\n" +"j=" +j +"\n" +"k=" +k);