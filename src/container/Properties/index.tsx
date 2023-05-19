import React from "react";
import { useToast } from "@chakra-ui/react";
import { CProperties, Layout } from "../../components";
import {
  useAddRentalBusiness,
  useAddFoodBusiness,
  useAddFuelBusiness,
} from "../../queries";

export default function Properties() {
  const toast = useToast();
  const {
    mutate: mutateAddRentalBusiness,
    isLoading: isLoadingAddRentalBusiness,
  } = useAddRentalBusiness();
  const { mutate: mutateAddFoodBusiness, isLoading: isLoadingAddFoodBusiness } =
    useAddFoodBusiness();
  const { mutate: mutateAddFuelBusiness, isLoading: isLoadingAddFuelBusiness } =
    useAddFuelBusiness();

  const onAddRentalBusiness = (
    landId: number,
    price: number,
    description: string,
    resetRentalValues: Function
  ) => {
    console.log("price in mutate", typeof price);
    mutateAddRentalBusiness(
      { landId, price, description },
      {
        onSuccess: (res) => {
          resetRentalValues();
          toast({
            title: "Rental property added successfully.",
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "success",
          });
        },
        onError: (error: any) => {
          toast({
            title: "Error",
            description: `${error.message}`,
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "error",
          });
        },
      }
    );
  };
  const onAddFoodBusiness = (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFoodValues: Function
  ) => {
    if (!thumbnail) {
      setError("thumbnail", {
        type: "custom",
        message: "Thumbnail is required",
      });
      return;
    }
    mutateAddFoodBusiness(
      { landId, itemName, price, description, thumbnail },
      {
        onSuccess: (res) => {
          resetFoodValues();
          toast({
            title: "Food item added successfully.",
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "success",
          });
        },
        onError: (error: any) => {
          toast({
            title: "Error",
            description: `${error.message}`,
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "error",
          });
        },
      }
    );
  };
  const onAddFuelBusiness = (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFuelValues: Function
  ) => {
    if (!thumbnail) {
      setError("thumbnail", {
        type: "custom",
        message: "Thumbnail is required",
      });
      return;
    }
    mutateAddFuelBusiness(
      { landId, itemName, price, description, thumbnail },
      {
        onSuccess: (res) => {
          resetFuelValues();
          toast({
            title: "Fuel item added successfully.",
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "success",
          });
        },
        onError: (error: any) => {
          toast({
            title: "Error",
            description: `${error.message}`,
            position: "top-right",
            isClosable: true,
            duration: 4000,
            status: "error",
          });
        },
      }
    );
  };

  return (
    <Layout pageTitle="Properties">
      <CProperties
        onAddRentalBusiness={onAddRentalBusiness}
        onAddFoodBusiness={onAddFoodBusiness}
        onAddFuelBusiness={onAddFuelBusiness}
        isLoadingAddRentalBusiness={isLoadingAddRentalBusiness}
        isLoadingAddFoodBusiness={isLoadingAddFoodBusiness}
        isLoadingAddFuelBusiness={isLoadingAddFuelBusiness}
      />
    </Layout>
  );
}
