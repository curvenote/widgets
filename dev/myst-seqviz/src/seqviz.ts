import { seqVizDirective } from "./directive";
import { seqparseTransform } from "./transform";

const plugin = {
  name: "SeqViz Plugin for MyST Markdown",
  directives: [seqVizDirective],
  transforms: [seqparseTransform],
};

export default plugin;
