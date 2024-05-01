window.alert('This Page Display Basic Skills that Front End Developers must Have')
const name = window.prompt('Write Your Name Please!')
window.alert('Hello ' + name + '!')

function play(obj) {
    var audio = obj.nextElementSibling
    
    if (audio.paused) {
        obj.className = 'play fa-solid fa-circle-pause fa-2xl mt-3 mb-2'
        audio.play()
        
    }
    else {
        obj.className = 'play fa-solid fa-circle-play fa-2xl mt-3 mb-2'
        audio.pause()
    }
    audio.addEventListener('ended', function() {
        obj.className = 'play fa-solid fa-circle-play fa-2xl mt-3 mb-2'
    })

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