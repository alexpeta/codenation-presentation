/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);


while (true) 
{
    var direction = readline(); 
    var x = X0;
    var y = Y0;

    for(var i=0; i<N; i++)
    {

        switch(direction)
        {
           case 'DR':
                   x=x+1;
                   y=y+1;
               break;
           case 'D':
                    y=y+1;
               break;
            
        }
        console.log(`${x} ${y}`);
        direction = readline(); 
        
    }
}