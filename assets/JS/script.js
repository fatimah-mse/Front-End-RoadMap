window.alert('This Page Display Basic Skills that Front End Developers must Have')
const name = window.prompt('Write Your Name Please!')
window.alert('Hello ' + name + '!')

function play(obj) {
    var audio = obj.nextElementSibling
    
    if (audio.paused) {
        stop()
        obj.classList.remove('fa-circle-play')
        obj.classList.add('fa-circle-pause')
        audio.play()
        
    }
    else {
        obj.classList.remove('fa-circle-pause');
        obj.classList.add('fa-circle-play');
        audio.pause()
    }
    audio.addEventListener('ended', function() {
        obj.classList.remove('fa-circle-pause')
        obj.classList.add('fa-circle-play')
    })
}

function stop() {
    var audioElements = document.querySelectorAll('audio')

    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].pause()
        var playButton = audioElements[i].previousElementSibling
        playButton.classList.remove('fa-circle-pause')
        playButton.classList.add('fa-circle-play')
    }
}

window.onscroll = function () {
    this.scrollY > 50 ? up.classList.add('show') : up.classList.remove('show') 
}
function Top () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}