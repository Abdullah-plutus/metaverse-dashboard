import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "../../../../services";
import store from "../../../../slices";
import Login from "..";

describe("<LoginComponent />", () => {
  const props = {
    handleLogin: jest.fn(),
    isLoading: false,
  };

  const wrappedComponent = (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );

  it("should call submit button", () => {
    render(wrappedComponent);
    expect(fireEvent.click(screen.getByTestId("#submit"))).toBe(true);
  });

  it("should render component", () => {
    render(wrappedComponent);
  });
});
