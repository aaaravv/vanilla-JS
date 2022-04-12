function changeproperties(element){
    document.getElementById('message').innerHTML=element.alt;
    document.getElementById('message').style.backgroundImage="url("+element.src+")";
}

function undo()
{
    var originaltext='Hover over an image'
    document.getElementById('message').innerHTML = originaltext;
    document.getElementById('message').style.backgroundImage="url('')"// --> this will change the current image to blank and hence will get replaced by previous background-color;

}