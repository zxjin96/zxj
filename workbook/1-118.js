var str=[5];
var char=[10];
var ch=char[10];
var i,j;
for(i=0;i<5;i++)
{
    str[i]=char[10];
}
for(i=0;i<5;i++)
    for(j=0;i<4;j++)
        if(strcmp(str[j],str[j+1])>0){
         ch=str[j];
         str[j]=str[j+1];
         str[j+1]=ch;
        }
for(i=0;i<5;i++)
    alert(a[i]);