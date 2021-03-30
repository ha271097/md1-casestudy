// Gọi tất cả class key
// let keys = document.querySelectorAll(".key");


//Khởi tạo hàm playPiano
function playPiano(e) {
    //Tạo  biến audio, e là mã khóa để trả về giá trị của thuộc tính keycode
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Thời gian delay của key-audio
    audio.currentTime = 0;screenX
    // Dùng phương thức play() để phát âm thanh vủa audio
    audio.play();

}
// function playPiano2(keycode){
//     let audio = document.querySelector(`audio[data-key=${keycode}]`);
//     // audio2.currentTime = 10;
//     audio.play();
// }
// window.addEventListener("run()", playPiano2);
window.addEventListener("keydown", playPiano);

