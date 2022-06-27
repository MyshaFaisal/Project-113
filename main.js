function setup() 
{
    canvas = createCanvas(500, 500);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide(300, 300);
}

function draw()
{
    image(video, 100, 100, 300, 300);
    fill("red");
    stroke("red");
    circle(40, 30, 40);

    fill("green");
    stroke("green")
    rect(60, 20, 370, 20);

    fill("red");
    stroke("red");
    circle(450, 30, 40);

    fill("green");
    stroke("green")
    rect(60, 450, 370, 20);

    fill("red");
    stroke("red");
    circle(440, 457, 40);

    fill("red");
    stroke("red");
    circle(42, 460, 40);

    fill("green");
    stroke("green")
    rect(60, 20, 370, 20);
    
}

function take_snapshot()
{
    save('student_name.png');
}