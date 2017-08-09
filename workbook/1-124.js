for(i=0;i<=92;i++)
    for(j=0;j<=92/2;j++)
        if((((92-i-2*j)%5)===0)&&(92-i-2*j>0))
            alert("one coins:" + (i+1)+"\n"+"two coins:" +(j+1) +"\n"+"five coins:" + ((92-i-2*j)/5+1));