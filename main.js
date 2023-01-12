hp_song = "";
sw_song = "";
function preload()
{
    sw_song = loadSound("the-imperial-march.mp3");
    hp_song = loadSound("Harry-Potter-Theme-Song.mp3");
}
function setup()
{
    canvas = createCanvas(400, 300);
    canvas.position(450, 195);
    canvas.show();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses);
}
function ModelLoaded()
{
    console.log("Model Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("Left Wrist X = "+leftWristX+"Left Wrist Y = "+leftWristY+" Right Wrist X = "+ rightWristX+" Right Wrist Y = "+rightWristY);
    }
}
function draw()
{
    image(video, 0, 0, 400, 300);
}  