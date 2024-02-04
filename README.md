# react-virtualization

This repository contains an example of how to build a virtualized list component
using React and no external libraries.

It's intended to be a learning resource for those who want to understand how
virtualization works without jumping straight into the complexity of a big library.

For a real-world project, you should consider using one of the following libraries
(in alphabetical order):

- [`@tanstack/react-virtual`](https://tanstack.com/virtual/latest)
- [`react-virtualized`](https://github.com/bvaughn/react-virtualized)
- [`react-virtuoso`](https://virtuoso.dev)
- [`react-window`](https://github.com/bvaughn/react-window)

These libraries are widely adopted and have been tested in production environments.

This work is partially based on the following article:

- <https://dev.to/mr_mornin_star/create-a-react-virtualizationwindowing-component-from-scratch-54lj>

## Demo

https://github.com/TommasoAmici/react-virtual/assets/424525/4b441bd5-dcd6-496e-bf8f-fd10f3bc1cf6

## Getting Started

Install dependencies:

```sh
bun install
```

Run the example:

```sh
cd example
bun run build
bun run serve
```

## Next steps

More things that could be added to this example:

- [ ] virtual columns
- [ ] virtual grid
