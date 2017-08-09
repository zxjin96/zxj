var bit=prompt("Please input pi valid bit","");
var temp,add,pi;
pi=2;
add=0;
do {
    temp = pi;
    add = sqrt(2 + add);
    pi = pi * 2 / add;
}
while(pi-temp>pow(0.1,bit));
alert(pi);