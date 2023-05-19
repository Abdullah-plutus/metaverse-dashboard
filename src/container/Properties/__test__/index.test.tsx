import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "../../../services";
import store from "../../../slices";
import Properties from "..";
import "@testing-library/jest-dom";

describe("<PropertiesContainer />", () => {
  const wrappedComponent = (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Properties />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );

  it("should render", () => {
    render(wrappedComponent);
  });
});
