# `deno run --watch=./` stops watching after the first restart

This is a minimal code example to demo how `deno run --watch=./` stops watching after the first restart.

## Setup

In one terminal:

```sh
deno task start
```

In a second terminal:

```sh
deno task change-css
deno task change-css
deno task change-css
cat css/test.css
```

The server will only restart once, no matter how many times the `test.css` file is appended to.

## The expected result

Deno should restart the the `start.ts` process everytime the `.css` file is modified.
