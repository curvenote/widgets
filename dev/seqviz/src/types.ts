interface Seq {
  name: string;
  type: "dna" | "rna" | "aa" | "unknown";
  seq: string;
  annotations: Annotation[];
}

interface Annotation {
  name: string;
  start: number;
  end: number;
  direction?: number;
  color?: string;
  type?: string;
}
