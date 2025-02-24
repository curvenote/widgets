---
title: Using Widgets
---

# Usage

The following will start a local http server to serve up the widget bundle

```sh
npm install
npm run serve
```

# Widget

::::{figure}
:::{any:bundle} https://curvenote.github.io/widgets/widgets/idr-image-data/widget.js
:styles: https://curvenote.github.io/widgets/widgets/idr-image-data/widget.css

{ "imageId": "4495402" }

:::
::::

::::::{tip} MyST Markdown
:::::{code}
::::{figure}
:::{any:bundle} https://curvenote.github.io/widgets/widgets/idr-image-data/widget.js
:styles: https://curvenote.github.io/widgets/widgets/idr-image-data/widget.css

{ "imageId": "4495402" }

:::
::::
:::::
::::::

To see the widget rendered in full, view the page in a Curvenote theme. If needed serve this
content in headless mode:

```sh
cn start --headless
```
