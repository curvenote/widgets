import { u } from "unist-builder";
import { makePlaceholder } from "./utils";

export const seqVizDirective = {
  name: "seqviz",
  doc: "A directive that will load seqparse compatible files and setup visualization using the SegViz library.",
  arg: {
    type: String,
    doc: "The path to the file to load and parse or an accession number.`",
  },
  body: {
    type: String,
    doc: `The body of the directive, if provided, it's fields will be used to populate the SeqViz model. In the 
    case an accession number or file path is provided, the the data in the body will override the data from the 
    file on a field by field basis.`,
  },
  options: {
    height: { type: String, doc: "The height of the visualization.`" },
    class: { type: String, doc: "The tailwind classes to apply.`" },
    viewer: {
      type: String,
      doc: "The viewer to use (linear, circular, both, both_flip).`",
    },
    style: { type: Object, doc: "The style to apply to the visualization.`" },
  },
  // TODO: validate(data, vfile) {},
  run(data, _vfile, _opts) {
    const block = u(
      "block",
      {
        kind: "seqviz",
        data: {
          import: "https://curvenote.github.io/widgets/widgets/seqviz.js",
          fileOrAccession: data.arg,
          body: data.body,
          class: data.options?.class ?? "",
          height: data.options?.height ?? "600px",
          viewer: data.options?.viewer ?? "both",
          style: data.options?.style ?? {},
        },
      },
      makePlaceholder(data, data.arg as string)
    );
    return [block];
  },
};
