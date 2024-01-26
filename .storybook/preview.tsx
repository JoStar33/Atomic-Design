import type { Preview } from "@storybook/react";
import { setupWorker } from "msw";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { handlers } from "../mocks/handlers";
import Theme from "../styles/Theme";

const queryClient = new QueryClient();

if (typeof global.process === "undefined") {
  //checks to make sure that this is not a node process
  const worker = setupWorker(
    //create service worker
    ...handlers
  );
  worker.start(); // worker starts!
}

export const decorators = [
  (Story) => (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </Theme>
  ),
];

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
