import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "../../../services";
import store from "../../../slices";
import Properties from "../../Properties";
import "@testing-library/jest-dom";
import { propertiesData } from "../../../fixtures";

describe("<PropertiesComponent />", () => {
  const rentalProps = {
    dataProperties: propertiesData,
    landId: 125,
    type: "RENTAL",
    onAddRentalBusiness: jest.fn(),
    onAddFoodBusiness: jest.fn(),
    onAddFuelBusiness: jest.fn(),
    isLoadingProperties: false,
    isLoadingAddRentalBusiness: false,
    isLoadingAddFoodBusiness: false,
    isLoadingAddFuelBusiness: false,
  };

  const wrappedComponent = (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Properties {...rentalProps} />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );

  it("should have correct heading", async () => {
    render(wrappedComponent);
    expect(screen.getByText("Properties")).toHaveTextContent("Properties");
  });

  it("should render component correctly", async () => {
    render(wrappedComponent);
  });
});
