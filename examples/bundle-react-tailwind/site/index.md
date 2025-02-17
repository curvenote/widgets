# Usage

The following will start a local http server to serve up the widget bundle

```sh
npm install
npm run serve
```

# Widget

On this page there should be at least a placeholder block for the `any:bundle` widget.

:::{any:bundle} http://localhost:8080/widget.js

{}

:::

To see the widget rendered in full, view the page in a Curvenote theme. If needed serve this
content in headless mode:

```sh
cn start --headless
```
