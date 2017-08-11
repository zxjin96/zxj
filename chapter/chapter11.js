var linkArr=[];
var titleArr=[];
var authorArr=[];
test();
function  test() {
    var val=prompt("Annonce de la page http://s.codepen.io:\nChoose an option:\n1:Show links\n2:Add a link\n3:Remove a link\n0:Quit","");
    if(val==='1') {
        var catalog=titleArr +  linkArr +authorArr;
        if (catalog!==null&&catalog!==""){
            alert(catalog);
            test();
        }
        else{
            alert("empty！");
            test();
        }
    }
    else if (val==='2')
    {
        var title=prompt("Please enter the title：","");
        if(title!=="")
        {
            titleArr.push(title);
        var link=prompt("Please enter the link：");
        if(link.toLowerCase().slice(0,7)==="http://"||link.toLowerCase().slice(0,8)==="https://")
        {
            linkArr.push(link);}
            else
        {
            var e="http://"+link;
            linkArr.unshift(e);
        }
        var author=prompt("Please enter the author:","");
        if(author!=="")
          {
              authorArr.push(author);
              alert("Successfully added");
              test();
                }
            }
    }
    else if(val==='3')
    {
            var remove=prompt("Please enter a link to delete（在1~"+linkArr.length+"）之间","")
            if(remove!==""&& remove>0 && remove<=linkArr.length)
            {
                linkArr.splice(remove-1,1);
                titleArr.splice(remove-1,1);
                authorArr.splice(remove-1,1);
                alert("deleted successfully");
                test();
            }
            else {
                alert("error！");
                test();
            }
        }
    else if(val==='0')
    {
        window.close();
    }
    else{
        alert("error！");
        test();

    }
}