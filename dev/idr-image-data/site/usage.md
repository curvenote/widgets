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

<!-- :::{any:bundle} https://curvenote.github.io/widgets/widgets/idr-image-data/widget.js -->

::::{figure}
:::{any:bundle} http://localhost:8080/widget.js
:styles: http://localhost:8080/widget.css

{ "imageId": "4495402" }

:::
::::

To see the widget rendered in full, view the page in a Curvenote theme. If needed serve this
content in headless mode:

```sh
cn start --headless
```
