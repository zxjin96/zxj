var nums = [ ];
var num = prompt("Please input sum of money","");
nums[0]=num.substring(4,5);
nums[1]=num.substring(3,4);
nums[2]=num.substring(2,3);
nums[3]=num.substring(1,2);
nums[4]=num.substring(0,1);
var mstr = "";
for(var i = 0;i <nums.length;i++ ){
    mstr+=nums[i];
}
alert(mstr);