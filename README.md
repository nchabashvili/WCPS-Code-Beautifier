# WCPS Code Beautifier

[WCPS Code Beautifier](https://nchabashvili.github.io/WCPS-Code-Beautifier/) is a web-based tool designed to enhance the readability and maintainability of WCPS (Web Coverage Processing Service) queries. This tool allows users to input unformatted WCPS queries, specify beautification options, and then generate a formatted version of the query.

## Features

- **User-Friendly Interface**: Input your unformatted WCPS query in the left input window.
- **Customizable Options**: Specify beautification options to tailor the formatting to your needs.
- **Instant Beautification**: Click the "Beautify" button to instantly receive a formatted query in the right output window.

## How to Use

1. **Input Query**: Paste your unformatted WCPS query into the left input window.
2. **Specify Options**: Choose your desired beautification options.
3. **Beautify**: Press the "Beautify" button.
4. **Get Formatted Query**: View the formatted query in the right output window.


## Example

Before Beautification:

```bash
for $c in (CoverageName)
let threshold := 100,
$maxPerLat := condense + over $pLat Lat(domain($c, Lat))
using max($c[Lat($pLat)]),
$filteredMaxPerLat:=switch
case $maxPerLat >$threshold return $maxPerLat
default return 0
return encode($filteredMaxPerLat, "text/csv")
```

After Beautification:

```bash
for $c in (CoverageName)
let threshold := 100,
    $maxPerLat := 
        condense +
        over $pLat Lat(domain($c, Lat))
        using max($c[Lat($pLat)]),
    $filteredMaxPerLat := 
        switch
        case $maxPerLat > $threshold
            return $maxPerLat
        default
            return 0
return
    encode(
        $filteredMaxPerLat,
        "text/csv"
    )
```