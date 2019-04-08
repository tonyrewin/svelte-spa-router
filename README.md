# Svelte 3 SPA boilerplate

## Router

A simple (50 lines) approach of utilizing window.onpopstate. Use router.svelte file to extend your routes.

## Pre-render

A simple (10 lines) approach to make the routes accessable with static webhosting. You should pass all the routes you want to pre-render as cli arguments to this script:

## Setup

```bash
yarn
yarn dev # development
yarn generate # pre-rendered public folder
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
now
```