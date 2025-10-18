# An `any:bundle` directive for OpenSeadragon


## Example

::::{figure}
:label: 
:::{any:bundle} http://127.0.0.1:8080/widget.mjs
:class: w-full
{
    "prefixUrl": "images/",
    "tileSources": "https://openseadragon.github.io/example-images/duomo/duomo.dzi"
}
:::

The OpenSeadragon viewer loading and displaying an SZI format image hosted at https://openseadragon.github.io/example-images/duomo/duomo.dzi
::::


## Usage


## Examples

### Convenience

We can create convenience directives to simplify common usage modes e.g.

::::{code}
:::{openseadragon:szi} https://openseadragon.github.io/example-images/duomo/duomo.dzi
:class: w-full
{
    "prefixUrl": "images/"
}
:::
::::

::::{code}
:::{openseadragon:zoomify} https://openseadragon.github.io/example-images/duomo/duomo.dzi
:class: w-full
{
    "prefixUrl": "images/",
    "type":       "zoomifytileservice",
    "width":      7026,
    "height":     9221,
    "tilesUrl":   "/test/data/zoomify/",
    "tileSize": 256,
    "fileFormat": 'jpg'	
}
:::
::::



### `any:bundle`

The `any:bundle` interface can be used to expose the full configuration surface of the library

::::{code}
:::{any:bundle} https://curvenote.github.io/widgets/widgets/openseadragon.js
:class: w-full
{
    "prefixUrl": "images/",
    "tileSources": "https://openseadragon.github.io/example-images/duomo/duomo.dzi"
}
:::
::::

