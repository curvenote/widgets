import React from "react";
import { createRoot } from "react-dom/client";
import { AnyModel } from "./model";
import Viewer from "./Viewer";

export function initialize() {
  console.log("Widget initialized");
}

export function render({ model, el }: { model: AnyModel; el: HTMLElement }) {
  console.log("SeqViz Widget rendering...");

  const height = (model.get("height") as string | undefined) ?? "500px";
  // todo validation
  const annotations = model.get("annotations") as Annotation[];
  const seq = {
    name: model.get("name") as string,
    type: model.get("type") as "dna" | "rna" | "aa" | "unknown",
    seq: model.get("seq") as string,
    annotations,
  };
  console.debug("SeqViz Data", seq);

  const App = () => (
    <div className="" style={{ height }}>
      <Viewer seq={seq} />
    </div>
  );

  const root = createRoot(el);
  root.render(<App />);
}

export default {
  initialize,
  render,
};
