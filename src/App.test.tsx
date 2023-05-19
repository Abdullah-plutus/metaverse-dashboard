import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";
import store from "./slices";
import App from "./App";

describe("<App />", () => {
  it("should renders", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
  });
});
