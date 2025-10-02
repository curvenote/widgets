---
title: Using Widgets
---

This shows the directive and widget format for an already supported natively in Curvenote.

# Any Bundle Directive

`````
::::{figure}
:::{any:bundle} https://curvenote.github.io/widgets/widgets/idr-image-data/widget.js
:styles: https://curvenote.github.io/widgets/widgets/idr-image-data/widget.css

{ "imageId": "4495402" }

:::
::::
`````

So the directive name is `any:bundle` Which allows us to point to a JavaScript ESM module hosted somewhere on the internet. And we can also supply styles as shown to accompany that widget. In the body of the directive itself should be a valid JSON object of the shape and containing the data that the particular widget bundle expects.

# Zarr Directive

Zarr directive is a convenience wrapper to specifically use the Vizarr viewer on a Zarr dataset, uses `any:bundle` under the hood.

`````
::::{figure}
:::{zarr} https://data.repository.org/project/dataset/image.zarr
:class: w-full
:height: 600px

:::
::::
`````