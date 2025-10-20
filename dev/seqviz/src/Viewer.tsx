import React from "react";
import { SeqViz } from "seqviz";

export default function Viewer({ seq }: { seq: Seq }) {
  return <SeqViz name={seq.name} seq={seq.seq} annotations={seq.annotations} />;
}
