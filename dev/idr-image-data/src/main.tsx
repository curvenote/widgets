import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AnyModel } from './model';
import { ImageDataResponse } from './types';
import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import './styles.css';

export function initialize() {
  console.debug('IDR Image Data Widget initialized');
}

const IDR_OME_PROJECT_DATA = 'https://idr.openmicroscopy.org/api/v0/m/projects/';
const IDR_OME_DATASET_DATA = 'https://idr.openmicroscopy.org/api/v0/m/dataset/';

const IDR_OME_CLIENT_PROJECT = 'https://idr.openmicroscopy.org/webclient/?show=project-';
const IDR_OME_CLIENT_DATASET = 'https://idr.openmicroscopy.org/webclient/?show=dataset-';

const IDR_IMAGE_DATA = 'https://idr.openmicroscopy.org/webclient/imgData/';
const IDR_THUMBNAIL = 'https://idr.openmicroscopy.org/webclient/render_thumbnail/';
// 4495402 Zebrafish Embryo

function SlimHeading({ heading }: { heading: string }) {
  return (
    <div className="w-full px-2 pt-2 pb-[2px] text-sm font-light">
      <div className="border-b border-b-neutral-700 pb-[2px] w-full">{heading}</div>
    </div>
  );
}

function Expanable({ label, data }: { label: string; data: Record<string, any> }) {
  return (
    <details className="text-sm cursor-pointer">
      <summary>{label}</summary>
      <div className="p-2 max-h-[300px] overflow-scroll text-xs font-mono border border-neutral-300 bg-neutral-50">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </details>
  );
}

function ImageDataCard({ imageId }: { imageId: string }) {
  const [imageData, setImageData] = React.useState<ImageDataResponse | null>(null);
  const [error, setError] = React.useState<any>(null);

  useEffect(() => {
    if (!imageId) {
      setError('No image Id provided');
      return;
    }

    fetch(`${IDR_IMAGE_DATA}${imageId}`)
      .then((response) => response.json())
      .then(setImageData)
      .catch((err) => setError(err));
  }, [imageId]);

  if (error)
    return (
      <div className="flex items-center justify-center p-4 text-red-500 bg-red-100 border border-red-500">
        <div>Error: {error?.message ?? error}</div>
      </div>
    );
  if (!imageData)
    return (
      <div className="flex items-center justify-center p-4 bg-green-100 border border-green-500">
        <div>Loading: {imageId}</div>
      </div>
    );

  const { channels, perms, rdefs, split_channel, meta, ...details } = imageData;
  const dateStamp = format(new Date(meta.imageTimestamp * 1000), 'MMM dd, yyyy');
  const timeStamp = format(new Date(meta.imageTimestamp * 1000), 'MMM dd, yyyy HH:mm');

  return (
    <div className="relative flex flex-col w-full space-y-4 overflow-hidden border rounded-lg shadow-lg lg:space-x-4 lg:flex-row text-neutral-900 border-black-100">
      <div className="mb-1 grow-1 lg:basis-1/2">
        <div
          className="h-[240px] bg-cover bg-gray-500 bg-clip-border"
          style={{ backgroundImage: `url(${IDR_THUMBNAIL}${imageId})` }}
        ></div>
        <div>
          <SlimHeading heading="image details" />
          <div className="flex flex-col p-2 space-y-2">
            <div className="flex items-center space-x-1">
              <a
                className="inline-flex font-semibold grow"
                href={`https://idr.openmicroscopy.org/webclient/search/?search_query=${imageId}`}
              >
                <div className="flex items-center space-x-2">
                  <div>{meta.imageName}</div>
                  <ExternalLink size={14} />
                </div>
              </a>
              <div
                className="pl-2 text-sm border-l-2 text-neutral-500 border-l-sky-800"
                title={timeStamp}
              >
                {dateStamp}
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              {meta.imageDescription || meta.imageDescription.length ? (
                <span>{meta.imageDescription}</span>
              ) : (
                <span className="text-sm text-neutral-300">no description</span>
              )}
            </div>
            <div className="flex items-center mt-1 space-x-1 text-xs font-light">
              {meta.imageAuthor && (
                <div className="px-[10px] py-[2px] border text-neutral-500 rounded-full border-neutral-500 bg-neutral-200">
                  {meta.imageAuthor?.toLocaleLowerCase()}
                </div>
              )}
              {meta.pixelsType && (
                <div className="px-[10px] py-[2px] text-blue-700 border border-blue-600 rounded-full bg-blue-200">
                  {meta.pixelsType?.toLocaleLowerCase()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grow-1 lg:basis-1/2">
        <div>
          <SlimHeading heading="dataset details" />
          <div className="p-2 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500">
                <a
                  className="flex items-center hover:underline"
                  href={`${IDR_OME_CLIENT_DATASET}${meta.datasetId}`}
                >
                  {meta.datasetId}{' '}
                  <ExternalLink className="inline-flex mb-[1px] ml-[1px]" size={14} />
                </a>
              </div>
              <div>{meta.datasetName}</div>
            </div>
            <div className="text-sm text-neutral-500">
              {meta.datasetDescription ? (
                <span>{meta.datasetDescription}</span>
              ) : (
                <span className="s text-neutral-300">no description</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <SlimHeading heading="project details" />
          <div className="p-2 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500">
                <a
                  className="flex items-center hover:underline"
                  href={`${IDR_OME_CLIENT_PROJECT}${meta.projectId}`}
                >
                  {meta.projectId}{' '}
                  <ExternalLink className="inline-flex mb-[1px] ml-[1px]" size={14} />
                </a>
              </div>
              <div>{meta.projectName}</div>
            </div>
            <div className="text-sm text-neutral-500">
              {meta.projectDescription ? (
                <div>{meta.projectDescription.replace('\n', ' ')}</div>
              ) : (
                <span className="s text-neutral-300">no description</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <SlimHeading heading="technicals" />
          <div className="grid grid-cols-2 gap-1 p-2 text-neutral-600">
            <Expanable label="perms" data={perms} />
            <Expanable label="channels" data={channels} />
            <Expanable label="split_channel" data={split_channel} />
            <Expanable label="rdefs" data={rdefs} />
            <Expanable label="details" data={details} />
          </div>
        </div>
      </div>
      <div className="absolute justify-end font-mono text-[8px] bottom-1 right-2 text-neutral-700">
        <a
          className="hover:underline"
          href="https://idr.openmicroscopy.org/about/api.html"
          target="_blank"
        >
          IDR API
        </a>
      </div>
    </div>
  );
}

export function render({ model, el }: { model: AnyModel; el: HTMLElement }) {
  console.debug('IDR Image Data Widget rendered');

  //validate
  const imageId = model.get('imageId') as string;

  const App = () => (
    <div data-widget="idr-image-data">
      <ImageDataCard imageId={imageId} />
    </div>
  );

  const root = createRoot(el);
  root.render(<App />);
}

export default {
  initialize,
  render,
};
