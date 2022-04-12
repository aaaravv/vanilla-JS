function nicknameFunction(){
//    checking if the chekbox is checked or not 
    if (document.getElementById('yesNick').checked){
        // if checkbox is checked than changing the display to inline block
        document.getElementById('nick').style.display="inline";
        // and also settting the attribute of required type in order to get value for block since user checked the box
        document.getElementById('nickname').setAttribute('required',true);
    }
    else{ 
        // if box is unchekced by user than remove the attrubute required
        document.getElementById('nickname').removeAttribute('required');
        // also change the display to none
        document.getElementById('nick').style.display="none";
    }
}
