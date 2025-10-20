import * as seqparse from "seqparse";
import { readFile } from "node:fs/promises";

export const seqparseTransform = {
  name: "seqviz-seqparse",
  doc: "A transform that parses an inoming file and prepares a SeqViz model.",
  stage: "document",
  plugin: (_, utils) => async (node) => {
    const nodes = utils.selectAll("block[kind='seqviz']", node) ?? [];
    await Promise.all(
      nodes.map(async (seqvizNode) => {
        const { file, class: className, height } = seqvizNode.data;
        const fileContent = await readFile(file, "utf8");
        const data = seqparse.parseFile(fileContent);
        const { name, type, seq, annotations } = data[0] ?? {};
        seqvizNode.data = {
          ...seqvizNode.data,
          json: {
            name,
            type,
            seq,
            annotations,
            class: className,
            height,
          },
        };
        seqvizNode.kind = "any:bundle";
      })
    );
  },
};
