---
title: widgets
---

# Usage

The following will start a local http server to serve up the widget bundle

```sh
npm install
npm run serve
```

# Widget

On this page there should be at least a placeholder block for the `any:bundle` widget.

::::{figure}
:::{any:bundle} http://127.0.0.1:8080/widget.js

{ "imageId": "4495402" }

:::
::::

<!--
::::{figure}
:::{any:bundle} https://curvenote.github.io/widgets/widgets/vizarr-viewer.js

{ "source": "https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.1/4495402.zarr", "height": "600px" }

:::
:::: -->

To see the widget rendered in full, view the page in a Curvenote theme. If needed serve this
content in headless mode:

```sh
cn start --headless
```
