const music= document.querySelector("audio")
const img=document.querySelector("img");
const play= document.getElementById("play" );
const artist= document.getElementById("artist" );
const title= document.getElementById("title" );
const prev= document.getElementById("prev");
const next= document.getElementById("next" );

const songs =[
    {
    name:"thapa-1",
    title:"Brown Munde",
    artist:"A P Dhillon",
},
{
    name:"thapa-2",
    title:"Khad tainu ",
    artist:"Neha Kakkar",
},
{
    name:"thapa-3",
    title:"Amplifier",
    artist:"Imran Khan",
},
]


let isPlaying= false;
//for play function
const playMusic=()  =>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    
    }

    //for pause function
const pauseMusic =()  =>{
    isPlaying= false;
music.pause();
play.classList.replace("fa-pause","fa-play");

}

play.addEventListener('click',()  =>{
    //if(isPlaying){
      //  pauseMusic();
    //}
    //else{
      //  playMusic()
    //}
    isPlaying ? pauseMusic() : playMusic();


});


const LoadSongs=(songs)=>{
    title.textContent= songs.title;
    artist.textContent= songs.artist;
    music.src= `music${songs.name}.mp3`
    
  

};
songIndex =0;

    //LoadSongs(songs[2]);
    
    const nextSong = () =>{

        songIndex= (songIndex +1) % songs.length;
LoadSongs(songs[songIndex]);
playMusic();


    }
    
    const prevSong = () =>{
        songIndex= (songIndex -1 )% songs.length ;
LoadSongs(songs[songIndex])
playMusic();
    }
    next.addEventListener('click',nextSong);
    prev.addEventListener('click',prevSong);

