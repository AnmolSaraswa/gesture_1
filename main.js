prediction_1="";
prediction_2="";
Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 100

});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function check() {
    Webcam.snap(function (data_uri) {
         document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; });
}
console.log('ml5.version:', ml5.version);
classifier = ml5.imageClassifier('https://www.loom.com/share/10c40c539a024210a3511b758400763c/model.json', modelLoaded);
function modelLoaded() {
    console.log('Model loaded!');
}

function speak()
{
    var synth=window.speechSynthesis;
    v1="The first prediction is"+prediction_1;
    v2="And the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(v1+v2);
    synth.speak(utterThis);
}