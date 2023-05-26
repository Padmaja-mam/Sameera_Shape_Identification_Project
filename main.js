
shapes = ["square","rectangle","rhombus","circle","oval","triangle"];
Score = 0;
onetosix = Math.floor(Math.random(1,6)*10);
console.log(onetosix);
provided = shapes[onetosix];
console.log(provided);
document.getElementById('sketch_name').innerHTML = "Sketch to be drawn : " + provided;


function preload()
{
mrdata = ml5.imageClassifier('DoodleNet');
}

function setup()
{
    canvas = createCanvas (280,280);
    canvas.position(500,195);
    canvas.background("white");
    canvas.mouseReleased(classifyCanvas);
}

function clearCanvas()
{
 r = random(255);
 g = random(255); 
 b = random(255);
 background(r,g,b);

}

function draw()
{
    stroke("black");
    strokeWeight(5);
    if (mouseIsPressed)
     {
        line(pmouseX, pmouseY, mouseX, mouseY);
     }
}

function classifyCanvas()
{
    mrdata.classify(canvas, gotResult);
}

function gotResult(error,results)
{
if (error)
{
    console.log(error);
}
else 
{

 console.log(results);

 data = results[0].label;

if(data == provided)
  {
    Score++;
    document.getElementById('score').innerHTML = 'Score: ' + Score;
  }

document.getElementById("name1").innerHTML = "shape identified : " + results[0].label;
document.getElementById("confidence").innerHTML = "Accuracy : " + floor((results[0].confidence) * 100) + "%";

} 

}

