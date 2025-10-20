import seqparse from "seqparse";

export const seqparseTransform = {
  name: "seqviz-seqparse",
  doc: "A transform that parses an inoming file and prepares a SeqViz model.",
  stage: "document",
  plugin: (_, utils) => async (node) => {
    const nodes = utils.selectAll("block[kind='seqviz']", node) ?? [];
    console.log("NODES", nodes.length);
    await Promise.all(
      nodes.map(async (seqvizNode) => {
        const { file, class: className, height } = seqvizNode.data;
        const { name, type, seq, annotations } = await seqparse(file);
        seqvizNode.data = {
          ...seqvizNode.data,
          name,
          type,
          seq,
          annotations,
          class: className,
          height,
        };
      })
    );
  },
};
