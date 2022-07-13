console.log("welcome to resso");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let bar = document.getElementById('bar');
let gif = document.getElementById('gif');
let firstsongname = document.getElementById('firstsongname');
let songItems = Array.apply(document.getElementById('songItem'));
let songs = [
    {songName: "havana - Camila cabello", filepath: "songs/1.mp3", coverpath: "coverphoto/1.png"},
    {songName: "Shape of You - Ed sheeran", filepath: "songs/2.mp3", coverpath: "coverphoto/2.png"},
    {songName: "Blinding lights - Weekend", filepath: "songs/3.mp3", coverpath: "coverphoto/3.png"},
    {songName: "Faded - Alan Walker", filepath: "songs/4.mp3", coverpath: "coverhoto/4.png"},
    {songName: "Closer - The Chainsmoker", filepath: "songs/5.mp3", coverpath: "coverhoto/5.png"},
]
songItems.forEach((element, i )=> {
    element.getElemensByTagname("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    bar.value = progress;
})
bar.addEventListener('change', ()=>{
    audioElement.currentTime = bar.value * audioElement.duration/100;
})
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-pause');
        e.target.classList.add('fa-pause-play');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        firstsongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
    
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        firstsongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        firstsongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
