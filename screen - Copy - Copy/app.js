const mainPart = document.getElementById('main-part');
const faceBg = document.getElementById('fb-backg');
const paraFirst = document.getElementById('fb-paraone');
const qrCode = document.getElementById('fb-qrcode');
const paraSecond = document.getElementById('fb-paratwo');


const fbTab = document.getElementById('fb-tab')
const twitterTab = document.getElementById('twitter-tab')
const youtubeTab = document.getElementById('youtube-tab')
const instaTab = document.getElementById('instagram-tab')

//twitter

const imgL = document.createElement('img');
//youtube

const imgY = document.createElement('img');

//instagram

const imgI = document.createElement('img');


//fb

const imgF = document.createElement('img');



// twitter handler


twitterTab.addEventListener('click', twitterhandle)


function twitterhandle() {
  imgY.remove()
  imgI.remove()
  imgF.remove()
  mainPart.style.backgroundColor = " #657786"
  imgL.src = "twitter-logo.png";
  document.getElementById('main-part').prepend(imgL);
  document.getElementById('fb-log-main').style.display = "none";
  imgL.style.width = "100px"
}

//youtube handler
youtubeTab.addEventListener('click', youtubehandle)

function youtubehandle() {
  imgL.remove()
  imgI.remove()
  imgF.remove()
  mainPart.style.backgroundColor = "tomato"
  imgY.src = "yt-logo.png";
  document.getElementById('main-part').prepend(imgY);
  document.getElementById('fb-log-main').style.display = "none";
  imgY.style.width = "100px"

}

//insta handler
instaTab.addEventListener('click', instahandle)

function instahandle() {
  imgL.remove()
  imgY.remove()
  imgF.remove()
  mainPart.style.backgroundColor = "#3f729b "
  imgI.src = "insta.png";
  document.getElementById('main-part').prepend(imgI);
  document.getElementById('fb-log-main').style.display = "none";
  imgI.style.width = "90px"

}


//fb handler
fbTab.addEventListener('click', fbhandle)

function fbhandle() {
  imgL.remove()
  imgY.remove()
  imgI.remove()
  mainPart.style.backgroundColor = " #4267B2 "

  imgF.src = "fb-logo.png";
  document.getElementById('main-part').prepend(imgF);
  document.getElementById('fb-log-main').style.display = "none";
  imgF.style.width = "120px"

}