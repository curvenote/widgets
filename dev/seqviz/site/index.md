## SeqViz

`any:bundle` renderer for the SeqViz library.


### Example

:::{lorem} 1
:::

::::{figure}
:label: fig:J23100
:::{any:bundle} http://localhost:8080/widget.js
{
    "height": "400px",
    "name": "J23100",
    "seq": "TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC",
    "annotations":[{ "name": "promoter", "start": 0, "end": 34, "direction": 1, "color": "blue" }]
}
:::
Rendering the sequence `TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC` using SeqViz with the `any:bundle` directive below 👇.
::::


::::{code}
:::{any:bundle} http://not-yet-deployed/widget.js
{
    "height": "400px",
    "name": "J23100",
    "seq": "TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC",
    "annotations":[{ "name": "promoter", "start": 0, "end": 34, "direction": 1, "color": "blue" }]
}
:::
::::