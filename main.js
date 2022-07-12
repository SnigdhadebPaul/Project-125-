leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(1000, 100);
    poseNet = ml5.poseNet(video, Modelloaded);
    poseNet.on('pose', gotResults);

}
function Modelloaded() {
    console.log("poseNet is Initialized");

}

function draw() {
    document.getElementById("font_size").innerHTML = "Width and Height of a square will be" + difference + " px ";
    background("red");
    fill("black");

    textSize(difference);
    text("Snigdhadeb", 50, 400);
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(" noseX = " + noseX + "noseY" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("leftWrist =" + leftWristX + "rightWrist =" + rightWristX + "difference =" + difference);
    }



}
