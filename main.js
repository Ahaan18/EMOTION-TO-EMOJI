prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function(sfh){
document.getElementById("result").innerHTML = '<img id="img654" src="'+sfh+'">';
    });
}
console.log("ml5.version", ml5.version);
x = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Exg0F1g65/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model loaded!")
}
function predict(){
    y = document.getElementById("img654");
    x.classify(y, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("pre1").innerHTML = result[0].label;
        document.getElementById("pre2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();
        if(result[0].label == "Happy"){
            document.getElementById("emo1").innerHTML = "&#128512";
        }
        if(result[0].label == "Tired"){
            document.getElementById("emo1").innerHTML = "&#128532";
        }
        if(result[0].label == "Angry"){
            document.getElementById("emo1").innerHTML = "&#128545";
        }
        if(result[0].label == "Surprised"){
            document.getElementById("emo1").innerHTML = "&#128558";
        }
        if(result[1].label == "Happy"){
            document.getElementById("emo2").innerHTML = "&#128512";
        }
        if(result[1].label == "Tired"){
            document.getElementById("emo2").innerHTML = "&#128532";
        }
        if(result[1].label == "Angry"){
            document.getElementById("emo2").innerHTML = "&#128545";
        }
        if(result[1].label == "Surprised"){
            document.getElementById("emo2").innerHTML = "&#128558";
        }
    }
}
function speak(){ var synth = window.speechSynthesis; speak_data_1 = "The first prediction is " + prediction1; speak_data_2 = "And the second prediction is " + prediction2; var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis); }
