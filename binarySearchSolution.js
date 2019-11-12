var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

var leftBoundry = 0;
var rightBoundry = W;

var topBoundry = 0;
var bottomBoundry = H;

var batman = [X0, Y0];
var direction = '';

function jump(position)
{ 
    console.log(`${position[0]} ${position[1]}`);
}

function getNewBoundry(start, end)
{
    return Math.floor((end+start)/2);    
}

function processDirection(direction)
{
    switch(direction)
        {
            case 'DR':
                topBoundry = batman[1];
                leftBoundry = batman[0];
                
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);
                break;
            case 'UR':
                bottomBoundry = batman[1];
                leftBoundry = batman[0];
                
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);
                break;
            case 'DL':
                topBoundry = batman[1];
                rightBoundry = batman[0];
                
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);             
                break;
            case 'UL':
                bottomBoundry = batman[1];
                rightBoundry = batman[0];
                
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);
                break;
            case 'D':
                topBoundry = batman[1];
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);
                break;
            case 'U':
                bottomBoundry = batman[1];
                batman[1] = getNewBoundry(topBoundry, bottomBoundry);         
                break;
            case 'R':
                leftBoundry = batman[0];
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                break;
            case 'L':
                rightBoundry = batman[0];
                batman[0] = getNewBoundry(leftBoundry, rightBoundry);
                break;
        }
        
        jump(batman);
}


while (true) {
    for(var i=0;i<N;i++)
    {    
        direction = readline();
        processDirection(direction);       
        
        console.error(batman);
        console.error('direction = '+direction);
    }
}