import '!style-loader!css-loader!sass-loader!../styles/globals.scss';
import '!style-loader!css-loader!sass-loader!../styles/mixins.scss';
import type { Preview } from "@storybook/react";
import { setupWorker } from "msw";
import { handlers } from "../mocks/handlers";

if (typeof global.process === "undefined") {
  //checks to make sure that this is not a node process
  const worker = setupWorker(
    //create service worker
    ...handlers
  );
  worker.start(); // worker starts!
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
