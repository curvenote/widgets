import * as vizarr from 'https://hms-dbmi.github.io/vizarr/index.js';

export default {
  async render({ model, el }) {
    console.debug('vizarr-viewer:', el);
    console.debug('vizarr-viewer:', model.get('height'));
    console.debug('vizarr-viewer:', model.get('source'));

    let div = document.createElement('div');
    Object.assign(div.style, {
      height: model.get('height') ?? '500px',
      backgroundColor: 'black',
    });
    // hard code closed for now
    console.debug('vizarr-viewer: creating viewer...');
    let viewer = await vizarr.createViewer(div, { menuOpen: false });
    console.debug('vizarr-viewer: adding image...');
    viewer.addImage({ source: model.get('source') });
    console.debug('vizarr-viewer: appending to el...');
    el.appendChild(div);
    console.debug('vizarr-viewer: done');
    return () => viewer.destory?.();
  },
};
