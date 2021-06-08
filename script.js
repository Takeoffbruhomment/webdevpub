var a;
var b;
var c;
function show_hide() {
    if(a==1)
        {
            document.getElementById("first").style.display="inline";
            
            return a=0;
        }

    else
        {
            document.getElementById("first").style.display="none";
            return a=1;
        }

}

function show_hide2() {
    if(b==1)
        {
            document.getElementById("video").style.display="inline";
            
            return b=0;
        }

    else
        {
            document.getElementById("video").style.display="none";
            return b=1;
        }
    }

function show_hide3() {
      if(c==1)
          {
              document.getElementById("music").style.display="inline";
              
              return c=0;
           }
    
     else
          {
              document.getElementById("music").style.display="none";
              return c=1;
          }
      }