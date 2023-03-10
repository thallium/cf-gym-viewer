## CF GYM VIEWER

View code on Codeforces GYM without an coach mode, inspired by [cf-code](https://github.com/dianhsu/cf-code). You can also use it with your own alt account so your main account won't get messed up by coach mode.

This works best with a [user script](https://github.com/thallium/cf-gym-viewer/raw/main/script.user.js) which makes the submission id clickable just like a regular contest.

Currently this uses cookie to fetch submission, login functionality is being implemented.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
