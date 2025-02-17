export type ImageDataResponse = {
  id: number;
  meta: {
    imageName: string;
    imageDescription: string;
    imageAuthor: string;
    projectName: string;
    projectId: number;
    projectDescription: string;
    datasetName: string;
    datasetId: number;
    datasetDescription: string;
    wellSampleId: string;
    wellId: string;
    imageTimestamp: number;
    imageId: number;
    pixelsType: string;
  };
  perms: {
    canAnnotate: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canLink: boolean;
  };
  tiles: boolean;
  tile_size: {
    width: number;
    height: number;
  };
  levels: number;
  zoomLevelScaling: Record<string, number>;
  interpolate: boolean;
  size: {
    width: number;
    height: number;
    z: number;
    t: number;
    c: number;
  };
  pixel_size: {
    x: number;
    y: number;
    z: number | null;
  };
  init_zoom: number;
  pixel_range: [number, number];
  channels: {
    emissionWave: number | null;
    label: string;
    color: string;
    inverted: boolean;
    reverseIntensity: boolean;
    family: string;
    coefficient: number;
    window: {
      min: number;
      max: number;
      start: number;
      end: number;
    };
    active: boolean;
  }[];
  split_channel: {
    g: {
      width: number;
      height: number;
      border: number;
      gridx: number;
      gridy: number;
    };
    c: {
      width: number;
      height: number;
      border: number;
      gridx: number;
      gridy: number;
    };
  };
  rdefs: {
    model: string;
    projection: string;
    defaultZ: number;
    defaultT: number;
    invertAxis: boolean;
  };
};
