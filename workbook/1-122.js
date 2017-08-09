var z;
for (var x=1;x<=16;x++)
    for (var y=1;y<=24;y++){
    z=30-x-y;
    if(3*x+2*y+z===50){
        alert("Men are " + x+ ",women are " + y + ",children are " + z +".");
    }
    }
