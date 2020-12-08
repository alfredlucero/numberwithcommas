# numwithcommas

TypeScript npm package to convert numbers (string | numbers) to number strings with commas in the proper thousands, millions, billions, etc. places

## How to test your package changes locally before publishing?

You can run `npm run test` to run the Jest unit tests and whenever you commit new changes, the Husky pre-commit Git hook will run the unit tests to be sure they pass.

You can also go into the `samplelinkedconsumer` folder i.e. `cd samplelinkedconsumer` and take advantage of `npm link` to test the package changes locally. This assumes you have TypeScript installed globally for you to run `tsc` and to run Node commands like `node` in your terminal.

First, run `npm run build` to compile the TS to JS into the `dist` folder.

Then, `cd samplelinkedconsumer` and run `npm link ../` to link the `numberwithcommas` local package with the folder.

Finally, run `tsc usage.ts` to compile it down to JavaScript and `node usage.js` to run the code that tries using the linked local package.

## How to publish a new npm package version?

Make sure you are logged into your account through `npm login`. If you are not logged into the proper user, use `npm logout` first.

Then, run `npm run build` to compile the package into the `dist/` folder.

Next, do `npm version <patch|minor|major>`.

Finally, do `npm publish`.
