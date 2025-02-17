import { initialize, render } from './main.tsx';
// TODO load this from @curvenote/renderers
import { AnyModel } from './model.ts';

initialize(); // Call the initialize function
const model = new AnyModel({});

render({ model, el: document.getElementById('widget-container')! });
