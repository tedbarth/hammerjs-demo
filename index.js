// import Hammer from 'hammerjs';
import Hammer from '@egjs/hammerjs';

window.addEventListener('load', () => {

  const hammer = new Hammer(document.body);

  hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});

  let offset = {x: 0, y: 0};

  hammer.on('panend', e => {
    console.log('panend');
    offset.x += e.deltaX;
    offset.y += e.deltaY;
  });

  hammer.on('pan', e => {
    console.log('pan');
    let div = document.querySelector('div');
    div.style.transform = `translate(${offset.x + e.deltaX}px, ${offset.y + e.deltaY}px)`;
  });

});