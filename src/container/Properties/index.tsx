import React from "react";
import { useToast } from "@chakra-ui/react";
import { CProperties, Layout } from "../../components";
import {
  useGetProperties,
  useAddRentalBusiness,
  useAddFoodBusiness,
  useAddFuelBusiness,
} from "../../queries";

export default function Properties() {
  const toast = useToast();
  const {
    data: dataProperties,
    isLoading: isLoadingProperties,
    refetch,
  } = useGetProperties();

  React.useEffect(() => {}, [dataProperties]);
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
    resetRentalValues: Function,
    onClose: Function
  ) => {
    mutateAddRentalBusiness(
      { landId, price, description },
      {
        onSuccess: (res) => {
          onClose();
          refetch();
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
          refetch();
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
          refetch();
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
        dataProperties={dataProperties?.userPorperties}
        onAddRentalBusiness={onAddRentalBusiness}
        onAddFoodBusiness={onAddFoodBusiness}
        onAddFuelBusiness={onAddFuelBusiness}
        isLoadingProperties={isLoadingProperties}
        isLoadingAddRentalBusiness={isLoadingAddRentalBusiness}
        isLoadingAddFoodBusiness={isLoadingAddFoodBusiness}
        isLoadingAddFuelBusiness={isLoadingAddFuelBusiness}
      />
    </Layout>
  );
}
