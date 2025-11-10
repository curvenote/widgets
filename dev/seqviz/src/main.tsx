import React from "react";
import { createRoot } from "react-dom/client";
import { AnyModel } from "./model";
import { SeqViz, SeqVizProps } from "seqviz";

export function initialize() {
  console.log("Widget initialized");
}

export function render({ model, el }: { model: AnyModel; el: HTMLElement }) {
  console.log("SeqViz Widget rendering...");

  const height = (model.get("height") as string | undefined) ?? "500px";

  const seqType = model.get("seqType") as SeqVizProps["seqType"] | undefined;
  const name = model.get("name") as SeqVizProps["name"] | undefined;
  const seq = model.get("seq") as SeqVizProps["seq"] | undefined;
  const viewer =
    (model.get("viewer") as SeqVizProps["viewer"] | undefined) ?? "both";
  const primers = model.get("primers") as SeqVizProps["primers"] | undefined;
  const highlights = model.get("highlights") as
    | SeqVizProps["highlights"]
    | undefined;
  const translations = model.get("translations") as
    | SeqVizProps["translations"]
    | undefined;
  const enzymes = model.get("enzymes") as SeqVizProps["enzymes"] | undefined;
  const bpColors = model.get("bpColors") as SeqVizProps["bpColors"] | undefined;
  const zoom = model.get("zoom") as SeqVizProps["zoom"] | undefined;
  const style = model.get("style") as Record<string, unknown> | undefined;
  const annotations = model.get("annotations") as
    | SeqVizProps["annotations"]
    | undefined;

  // todo validation
  const data = {
    name,
    seqType,
    seq,
    annotations,
    primers,
    highlights,
    translations,
    enzymes,
    bpColors,
    viewer,
    zoom,
    style,
  };
  console.debug("SeqViz Data", data);

  const App = () => (
    <div className="" style={{ height }}>
      <SeqViz
        name={data.name}
        seq={data.seq}
        annotations={data.annotations}
        primers={data.primers}
        highlights={data.highlights}
        translations={data.translations}
        enzymes={data.enzymes}
        bpColors={data.bpColors}
        seqType={data.seqType}
        viewer={data.viewer}
        style={data.style}
        zoom={data.zoom}
      />
    </div>
  );

  const root = createRoot(el);
  root.render(<App />);
}

export default {
  initialize,
  render,
};
