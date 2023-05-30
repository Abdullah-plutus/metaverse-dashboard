import React from "react";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CFoodBusiness, Layout } from "../../../components";
import {
  useGetFoodBusiness,
  useUpdateFoodBusiness,
  useAddFoodBusiness,
} from "../../../queries";

export default function FoodBusiness() {
  const toast = useToast();
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetFoodBusiness(Number(id));
  const { mutate, isLoading: isLoadingUpdateFoodBusiness } =
    useUpdateFoodBusiness();

  const { mutate: mutateAddFoodBusiness, isLoading: isLoadingAddFoodBusiness } =
    useAddFoodBusiness();

  const onEditFoodBusiness = (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: string | File
  ) => {
    console.log("previousItemName", previousItemName);
    mutate(
      { landId, previousItemName, itemName, price, description, thumbnail },
      {
        onSuccess: (res) => {
          refetch();
          toast({
            title: "Fuel property updated successfully.",
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

  return (
    <Layout pageTitle="Food Business">
      <CFoodBusiness
        landId={Number(id)}
        foodBusinessData={data?.foodBusiness}
        isLoading={isLoading}
        isLoadingUpdateFoodBusiness={isLoadingUpdateFoodBusiness}
        isLoadingAddFoodBusiness={isLoadingAddFoodBusiness}
        onEditFoodBusiness={onEditFoodBusiness}
        onAddFoodBusiness={onAddFoodBusiness}
      />
    </Layout>
  );
}
