// Gọi tất cả class key
// let keys = document.querySelectorAll(".key");


//Khởi tạo hàm playPiano
function playPiano(e) {
    //Tạo  biến audio, e là mã khóa để trả về giá trị của thuộc tính keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Thời gian delay của key-audio
    audio.currentTime = 0;
    // Dùng phương thức play() để phát âm thanh vủa audio
    audio.play();

}


window.addEventListener("keydown", playPiano);

