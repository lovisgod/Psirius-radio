
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const stop = document.querySelector('#stop');
//const radio = document.querySelector('li');
var radiolist = document.getElementsByTagName("li");
const statio_name = document.querySelector('#station-name');
let url = 'http://pollux.shoutca.st:8294/stream?listening-from-radio-garden=1559817258870';
let sound = null


// const getInitialUrl=()=> {
//     url = 
// };



let playing = 0;
const setUpRadio = ()=> {
    sound = new Howl({
        src: url,
        html5: true,
        format: ['mp3', 'aac']
    });
}

const getUrl =(e)=> {
    sound.stop();
    sound = null;
    const theurl = e.target.id;
    const stationName = e.target.textContent;
    console.log(stationName);
    statio_name.innerHTML = stationName;
    url = theurl;
    console.log(url);
    setUpRadio();
};


const playRadio = ()=> {
    console.log(url);
    if (playing == 0){
        sound.play();
        playing = 1;
    }else if (playing==1){
        sound.pause();
        playing = 0;
    }
    
};

const stopRadio =()=> {
    sound.stop();
    playing =0;
};



play.addEventListener('click', playRadio);
stop.addEventListener('click', stopRadio);
//radio.addEventListener('click', getUrl);
setUpRadio();

for (var i = 0 ; i < radiolist.length; i++) {
    console.log(radiolist[i]);
    radiolist[i].addEventListener('click', getUrl);
  } 



//src: 'http://prclive1.listenon.in:9960/?fbclid=IwAR1bAO9Hf-yvOGrjKVVdYt0XXnqo85o1G2IXWrzVtjIujOit5JqW7oQUtfI',
//http://pollux.shoutca.st:8294/stream?listening-from-radio-garden=1559817258870
//http://s2.voscast.com:10692/;stream1508472041425/1