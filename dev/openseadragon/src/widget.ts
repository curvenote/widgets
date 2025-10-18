// https://openseadragon.github.io/docs/
import OpenSeadragon from "openseadragon";

interface Model {
  get(name: string): string | undefined;
}

async function render({ model, el }: { model: Model; el: HTMLElement }) {
  console.debug("openseadragon-viewer:", el);

  const id = model.get("id") ?? crypto.randomUUID();
  const prefixUrl = model.get("prefixUrl");
  const tileSources = model.get("tileSources");

  console.debug("openseadragon-viewer: id", id);
  console.debug("openseadragon-viewer: prefixUrl", prefixUrl);
  console.debug("openseadragon-viewer: tileSources", tileSources);

  let div = document.createElement("div");
  div.id = id;
  Object.assign(div.style, {
    height: model.get("height") ?? "500px",
    backgroundColor: "black",
  });
  el.appendChild(div);

  if (tileSources) {
    var viewer = OpenSeadragon({ id, prefixUrl, tileSources });
    console.debug("openseadragon-viewer: done");
    return () => viewer.destroy?.();
  } else {
    div.innerHTML = "No tileSources provided";
    console.debug("openseadragon-viewer: done");
    return () => {};
  }
}

export default { render };
