---
title: BNext Labs - Microscopy Viz
subtitle: In-article microscopy data visualizations using Curvenote + Vizarr
---

Curvenote has a flexible JavaScript widget system built-in that allows us to easily deploy customized widgets. That leverages a directive structure which is flexible, allowing us to supply arbitrary JSON data packets to the JavaScript widgets. 

The following examples are using some of bnextbio's datasets along with this widget system and in combination with the Vizarr viewer package from the Harvard Medical School.


## PURE Liposome Timeseries

::::{figure}
:label: fig:liposome
:::{any:widget} https://curvenote.github.io/widgets/widgets/vizarr-viewer.js
:class: w-full

{ "source": "https://data.test.nucleus.engineering/20250922-cephla-processing/20250925-PURE-01.zarr", "height": "600px" }

:::

This is a PURE Liposome Image Timeseries

::::

## Cephla Dataset

::::{figure}
:label: fig:cephla
:::{any:bundle} https://curvenote.github.io/widgets/widgets/vizarr-viewer.js
:class: w-full

{ "source": "https://data.test.nucleus.engineering/20250319-cephla-test/E2-0.ome.zarr", "height": "600px" }

:::

This is a Cephla dataset

::::

## Zarr Directive (Convenience)

[](#fig:liposome) and [](#fig:cephla) are rendered using the generic `any:bundle` directive. Curvenote also shapes a convenience `zarr` directive, with a slightly simpler parameter surface.

::::{figure}
:label: fig:cephla2
:::{zarr} https://data.test.nucleus.engineering/20250319-cephla-test/E2-0.ome.zarr
:class: w-full
:height: 600px

:::

This is a Cephla dataset again, now rendered in the `zarr` directive.

::::

## SeqViz using Genebank files

::::{figure}
:::{seqviz} ./plamGFP-PURE.gb
:height: 600px
:::

A SeqViz widget rendering a sequence from the `plamGFP-PURE.gb` file. If this was available on Genebank, the Accession alone could have also been used.
::::


## Additional Examples

We have some additional examples that pull microscopy data from the IDR data archive, visualizing them in the same way but also using other custom widgets to link out to those datasets. The custom widgets provide interactive data cards summarizing the metadata for each dataset.

See those examples here: https://cn-testing.curve.space/articles/cn-testing-idr-images
