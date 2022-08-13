import Vimeo from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Vimeo(iframeRef);

const onTimeupdate = function (data) {
  console.log(data);
};

player.on('timeupdate', onTimeupdate);
