import React from 'react';
import { createRoot } from 'react-dom/client';
import { AnyModel } from './model';

export function initialize() {
  console.log('Widget initialized');
}

export function render({ model, el }: { model: AnyModel; el: HTMLElement }) {
  console.log('Widget rendered');
  const App = () => <div className="p-4 text-white bg-blue-500">Hello, AnyWidget!</div>;

  const root = createRoot(el);
  root.render(<App />);
}

export default {
  initialize,
  render,
};
