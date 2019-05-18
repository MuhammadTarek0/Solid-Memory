var images = [[1,6,4,5],[2,3,6,1],[5,2,4,3]];
var p;
var isUsed = false;
var r1, c1, m1;
var r2, c2, m2;
var timerID;

function Init()
{
    p=window.document.getElementById("00");
}
function Display(r,c,m)
{ 


    if(!isUsed)
    {
        r1 = r;
        c1 = c;
        m1 = m;
        isUsed = true; 

        var x = images[r1][c1];
        p=window.document.getElementById(m1);
        p.src= x + ".gif";
    }

    

    else
    {
        
        r2 = r;
        c2 = c;
        m2 = m;
        isUsed = false; 

        x = images[r2][c2];
        p=window.document.getElementById(m2);
        p.src= x + ".gif";

        if (images[r1][c1] === images[r2][c2])
        {
            
            r2 = 0;
            c2 = 0;
            m2 = 0;
            r1 = 0;
            c1 = 0;
            m1 = 0;
        }
        else
        {
            timerID = setTimeout("doNothing()", 1000)
            p=window.document.getElementById(m1);
            p.src= "Moon.gif";
            p=window.document.getElementById(m2);
            p.src= "Moon.gif";
        }

    }
   
   

}

function doNothing()
{}



