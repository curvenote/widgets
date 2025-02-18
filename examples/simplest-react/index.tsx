import React from 'react';
import ReactDOM from 'react-dom/client';

function Sparkles() {
  return <div>✨ Hello! I am from an external ESM module.</div>;
}

export function render({ model, el }: { model: any; el: HTMLElement }) {
  const root = ReactDOM.createRoot(el);
  root.render(<Sparkles />);
}

export default {
  render,
};
