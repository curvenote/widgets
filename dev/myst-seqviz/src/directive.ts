import { u } from "unist-builder";
import { makePlaceholder } from "./utils";

export const seqVizDirective = {
  name: "seqviz",
  doc: "A directive that will load seqparse compatible files and setup visualization using the SegViz library.",
  arg: { type: String, doc: "The path to the file to load and parse.`" },
  options: {
    height: { type: String, doc: "The height of the visualization.`" },
    class: { type: String, doc: "The tailwind classes to apply.`" },
  },
  run(data, vfile) {
    const block = u(
      "block",
      {
        kind: "seqviz",
        data: {
          import: "https://curvenote.github.io/widgets/widgets/seqviz.js",
          file: data.arg,
          class: data.options?.class ?? "",
          height: data.options?.height ?? "600px",
        },
      },
      makePlaceholder(data, data.arg as string)
    );
    return [block];
  },
};
