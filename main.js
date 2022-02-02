function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    // Initalizing The Post Net 
    poseNet=ml5.poseNet(video, modelLoaded);
    // Executing the Pose Net
    poseNet.on('Pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized');
}

function draw()
{
    background("#d6ff85");
}