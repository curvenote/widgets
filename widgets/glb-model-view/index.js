export function render({ model, el }) {
    if (!el)
        throw new Error('Element is required');
    // Define configurable buttons
    const hotspots = [
        { label: 'mitochondria', position: '109.18m 178.02m 6.48m', normal: '0.40m 0.91m -0.13m' },
        { label: 'microtubule', position: '175.10m 167.30m 144.35m', normal: '0.64m 0.70m -0.33m' },
        { label: 'golgi', position: '189.52m 5.63m 119.32m', normal: '-0.41m -0.87m 0.26m' },
        { label: 'endosome', position: '110.96m 58.38m 5.41m', normal: '0.33m 0.53m -0.78m' },
        { label: 'vesicle', position: '122.04m 32.12m 15.68m', normal: '0.68m 0.40m -0.61m' },
        { label: 'lipid droplet', position: '132.99m 12.27m 179.32m', normal: '0.21m -0.19m 0.96m' },
        {
            label: 'endoplasmic reticulum',
            position: '20.66m 194.99m 148.98m',
            normal: '-0.99m -0.03m 0.05m',
        },
        { label: 'lysosome', position: '176.04m 24.16m 33.08m', normal: '0.95m 0.30m -0.04m' },
    ];
    // Define model data URL
    const modelSrc = 'https://cellmapchallenge.janelia.org/file/crop313';
    const posterSrc = 'https://cellmapchallenge.janelia.org/file/crop313-poster';
    // Create shadow root
    const shadow = el.attachShadow({ mode: 'open' });
    // Create style
    const style = document.createElement('style');
    style.textContent = `
    .Hotspot {
      background: #fff;
      border-radius: 32px;
      border: 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      height: 24px;
      padding: 8px;
      position: relative;
      transition: opacity 0.3s;
      width: 24px;
    }
    .Hotspot:not([data-visible]) {
      background: transparent;
      border: 4px solid #fff;
      box-shadow: none;
      height: 32px;
      pointer-events: none;
      width: 32px;
    }
    .Hotspot:focus {
      border: 4px solid rgb(0, 128, 200);
      height: 32px;
      outline: none;
      width: 32px;
    }
    .HotspotAnnotation {
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      color: rgba(0, 0, 0, 0.8);
      font-size: 12px;
      font-weight: 700;
      left: calc(100% + 1em);
      padding: 0.5em 1em;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  `;
    // Create script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
    // Create model-viewer container
    const container = document.createElement('div');
    container.innerHTML = `
    <model-viewer
      style="min-height: 300px; width: 100%; height: 100%;"
      src="${modelSrc}"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster="${posterSrc}"
      shadow-intensity="1"
      exposure="1"
    >
      ${hotspots
        .map((hotspot, index) => `
            <button class="Hotspot" slot="hotspot-${index + 1}" 
              data-position="${hotspot.position}" 
              data-normal="${hotspot.normal}" 
              data-visibility-attribute="visible">
              <div class="HotspotAnnotation">${hotspot.label}</div>
            </button>
          `)
        .join('')}
    </model-viewer>
  `;
    // Append elements
    shadow.appendChild(style);
    shadow.appendChild(script);
    shadow.appendChild(container);
}
export default {
    render,
};
