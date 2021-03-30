
let arrayMucsic = [];
let count=0;

    function record(key) {
        // for(let i =0; i<arrayMucsic;i++){
        //     arr
    // }
    arrayMucsic.push(key);
}
function showKey() {
    if (count==0){
        document.getElementById("manhinh").value = arrayMucsic;
        document.getElementById("manhinh").style.visibility="visible";
        count++;
    }
    else if(count==1){
        document.getElementById("manhinh").style.visibility="hidden";
        count--;
    }
}
let countRecord = 0;
let timeOut;
// window.addEventListener(, run());
function run(i){
            const audio = document.querySelector('audio[data-key="'+arrayMucsic[i]+'"]');
            if (!audio) return;
            audio.play();
}

function setTimeOutRecord(){
    if (countRecord > arrayMucsic.length -1){
        clearTimeout(timeOut);
        location.reload();
    } else {
        run(countRecord);
        countRecord++;
    }
    timeOut = setTimeout(setTimeOutRecord,300);

}


