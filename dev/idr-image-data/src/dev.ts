import { initialize, render } from './main.tsx';
// TODO load this from @curvenote/renderers
import { AnyModel } from './model.ts';

initialize(); // Call the initialize function
// 4495402
// 9822152
const model = new AnyModel({ imageId: 4495402 });

render({ model, el: document.getElementById('widget-container')! });
