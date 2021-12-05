let bb = new Number;

bb = 0;
 
 a.onclick = function(){
     
     bb=bb+1;
     var div1 = div0.cloneNode(false);
     var divdiv = div1;
     div1.id = "div"+bb;
     div1.style.display = "block";
     www.after(div1);

     div1 = cl0.cloneNode(true);
     div1.id = "cl"+bb;
     divdiv.prepend(div1);
     

     div1 = br0.cloneNode(true);
     div1.id = "br"+bb;
     divdiv.prepend(div1);

     div1 = e0.cloneNode(true);
     div1.id = "e"+bb;
     divdiv.prepend(div1);
     div1.onclick = function(){
         divdiv.style.display = "none";
         var tttt = div1.id;
         document.forms[tttt]["ttt"].value = "";
         document.forms[tttt]["yyy"].value = "";
     }

     div1 = w0.cloneNode(true);
     div1.id = "w"+bb;
     divdiv.prepend(div1);
     div1.onclick = function(){
         
         var tttt = div1.id;
         var uuuu = tttt.substring(2, tttt.length);
         var gggg = Number(uuuu);
         if(gggg!=1){
         gggg = gggg - 1;
         var yyyy = "div" + gggg;
            var hh1 = document.forms[tttt]["ttt"].value;
            var hh11 = document.forms[tttt]["yyy"].value;
            var hh2 = document.forms[yyyy]["ttt"].value;
            var hh22 = document.forms[yyyy]["yyy"].value;
            document.forms[tttt]["ttt"].value = hh2;
            document.forms[tttt]["yyy"].value = hh22;
            document.forms[yyyy]["ttt"].value = hh1;
            document.forms[yyyy]["yyy"].value = hh11;}

        
     }

     div1 = q0.cloneNode(true);
     div1.id = "q"+bb;
     divdiv.prepend(div1);
     div1.onclick = function(){
         
        var tttt = div1.id;
        var uuuu = tttt.substring(2, tttt.length);
        var gggg = Number(uuuu);
        if(gggg!=bb){
        gggg = gggg + 1;
        var yyyy = "div" + gggg;
           var hh1 = document.forms[tttt]["ttt"].value;
           var hh11 = document.forms[tttt]["yyy"].value;
           var hh2 = document.forms[yyyy]["ttt"].value;
           var hh22 = document.forms[yyyy]["yyy"].value;
           document.forms[tttt]["ttt"].value = hh2;
           document.forms[tttt]["yyy"].value = hh22;
           document.forms[yyyy]["ttt"].value = hh1;
           document.forms[yyyy]["yyy"].value = hh11;}

       
    }

     div1 = ff0.cloneNode(true);
     div1.id = "ff"+bb;
     div1.name = "div"+bb;
     divdiv.prepend(div1);

     b.onclick = function(){
         var kk = "";
         var i;
         
         
         
         for ( i = bb; i>1; i = i - 1)
         {
             
             var hh = document.forms["div"+i]["ttt"].value;
             var jj = document.forms["div"+i]["yyy"].value;
             if((hh != "")&&(jj != ""))
              kk = kk + "\u0022" + hh + "\u0022" + ":"  + "\u0022" + jj + "\u0022" + ",";
         } 
         if (i==1) {
            var hh = document.forms["div"+i]["ttt"].value;
             var jj = document.forms["div"+i]["yyy"].value;
             if((hh != "")&&(jj != ""))
             kk = kk + "\u0022" + hh + "\u0022" + ":"  + "\u0022" + jj + "\u0022"; 
         }
         if ( ((document.forms["div"+bb]["ttt"].value) == "")||((document.forms["div"+bb]["yyy"].value) == "")) kk = kk.substring(0, kk.length - 1);

         if (kk !="")
         kk = "{" + kk + "}";
        let div = document.createElement('div');
        div.innerHTML = kk;
        document.body.append(div);
    }

 };


