// Tạo mảng lưu các e.keycode trong quá trình chơi đàn
let arrayMucsic = [];
let count=0;
// let check=false;
// let a=0;
// tạo hàm để push(thêm) các phím đã chơi
function record() {
    // for(let i =0; i<arrayMucsic;i++){
    //     arr
    // }
    arrayMucsic.push();
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


// function startpush(){
//     a++;
//     if(a%2===0){
//         check=false;
//     }
//     else {
//         check=true;
//     }
//     return check;
// }
//     if(check===true){
//         record();
//     }
//
// function playrecord(arrayMusic){
//     for(let i=0;i<arrayMusic.length;i++){
//         arrayMusic[i].play();
//     }
// }


