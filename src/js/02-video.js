import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Vimeo(iframeRef);
const savedCurrentSeconds = localStorage.getItem('videoplayer-current-time');

const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 10000));
player.setCurrentTime(savedCurrentSeconds);
