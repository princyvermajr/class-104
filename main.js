Webcam.set({
    height:350,
    width:350,
    dest_height:350,
    dest_width:350,
    image_format:'jpeg',
    jpeg_quality:100
    });
    
    camera= document.getElementById("webcam");
    Webcam.attach('#webcam');
    
    function snapshot(){
        Webcam.snap(function(data_uri){
          document.getElementById("captured").innerHTML="<img id='image2' src='"+data_uri+"'>";
        });
    }