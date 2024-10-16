

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 3000)


 export default function nextImage(){
    count++;
    if(count>6){
      count = 1;
    }

    document.getElementById("radio1"+count).checked = true;

}
    

