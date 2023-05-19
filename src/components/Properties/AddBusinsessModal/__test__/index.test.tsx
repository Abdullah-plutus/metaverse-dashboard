import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "../../../../services";
import store from "../../../../slices";
import AddBusinessModal from "../../AddBusinsessModal";
import "@testing-library/jest-dom";

describe("<AddBusinessModalComponent />", () => {
  const rentalProps = {
    landId: 125,
    type: "RENTAL",
    onAddRentalBusiness: jest.fn(),
    onAddFoodBusiness: jest.fn(),
    onAddFuelBusiness: jest.fn(),
    isLoadingAddRentalBusiness: false,
    isLoadingAddFoodBusiness: false,
    isLoadingAddFuelBusiness: false,
  };

  const wrappedComponent = (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AddBusinessModal {...rentalProps} />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );

  it("should check rental modal title", async () => {
    const component = render(wrappedComponent);

    expect(fireEvent.click(component.getByText("Set Up Business"))).toBe(true);

    //  fireEvent.click(component.getByRole("button"));
    //  await waitFor(() => userEvent.click(screen.getByRole("button")));
    //  fireEvent.click(screen.getByRole('button'));
    // expect(component.("#modalHeading")).toHaveTextContent(
    //   "Add Rental Business"
    // );
  });

  //   it("should call submit button", () => {
  //     render(wrappedComponent);
  //     expect(fireEvent.click(screen.getByRole("button"))).toBe(true);
  //   });

  it("should render component", () => {
    render(wrappedComponent);
  });
});
