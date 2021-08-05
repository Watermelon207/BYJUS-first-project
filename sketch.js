

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(Swap);
}

function draw()
{

}

function Swap()
{
  [a,b]=[b,a]
  console.log("the swapped value",+a)
  console.log("the swapped value",+b)
}