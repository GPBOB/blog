
    var li=document.getElementById("ul1").getElementsByTagName("li");

    var tt=document.getElementById("tt");
    console.log(li);
    function change_src() {
        var src_s=["index.html","article.html","about.html"];
        console.log("!");
        for (var i = 0;i < li.length; i++) {
            li[i].index = i;
            li[i].onclick=function(){
                var j=this.index;
                tt.src = src_s[j];

            }
        }
    }
