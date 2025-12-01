import seqparse from "seqparse";
import type { Seq } from "seqparse";
import { readFile } from "node:fs/promises";

export const seqparseTransform = {
  name: "seqviz-seqparse",
  doc: "A transform that parses an inoming file and prepares a SeqViz model.",
  stage: "document",
  plugin: (_, utils) => async (node) => {
    const nodes = utils.selectAll("block[kind='seqviz']", node) ?? [];
    await Promise.all(
      nodes.map(async (seqvizNode) => {
        const {
          fileOrAccession,
          body,
          class: className,
          height,
          viewer,
          zoom,
          style,
        } = seqvizNode.data;

        const seqparseFn = (seqparse as any).default;
        let loadedSeqData: Seq | undefined;
        try {
          const fileContent = await readFile(fileOrAccession, "utf8");
          const parsed = await seqparseFn(fileContent, {
            fileName: fileOrAccession,
          });
          loadedSeqData = parsed;
        } catch (error) {
          console.debug(`Could not locate file, may be an accession: ${error}`);
          // assuming the file read failed, try as an accession
          try {
            const fetched = await seqparseFn(fileOrAccession);
            loadedSeqData = fetched;
          } catch (error) {
            console.error(`Error parsing file or accession: ${error}`);
            return;
          }
        }

        if (!loadedSeqData) {
          return;
        }

        seqvizNode.data = {
          ...seqvizNode.data,
          json: {
            viewer,
            zoom,
            style,
            class: className,
            height,
            ...loadedSeqData,
            ...body,
          },
        };
        seqvizNode.kind = "any:widget";
      })
    );
  },
};
