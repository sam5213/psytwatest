document.getElementById('book-consultation').addEventListener('click', function() {
    alert('Вы записались на консультацию! Психолог свяжется с вами.');
});

// Пример кода для видеозвонка (используется WebRTC)
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var video = document.getElementById('video-call');
    video.srcObject = stream;
    video.play();
})
.catch(function(err) {
    console.log("Ошибка получения доступа к камере:", err);
});
