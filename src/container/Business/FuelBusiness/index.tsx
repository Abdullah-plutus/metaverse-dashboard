import React from "react";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Layout, CFuelBusiness } from "../../../components";
import {
  useGetFuelBusiness,
  useUpdateFuelBusiness,
  useAddFuelBusiness,
} from "../../../queries";

export default function FuelBusiness() {
  const toast = useToast();
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetFuelBusiness(Number(id));

  const { mutate, isLoading: isLoadingUpdateFuelBusiness } =
    useUpdateFuelBusiness();

  const { mutate: mutateAddFuelBusiness, isLoading: isLoadingAddFuelBusiness } =
    useAddFuelBusiness();

  const onEditFuelBusiness = (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: string | File
  ) => {
    //  console.log("previousItemName", previousItemName);
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
    <Layout pageTitle="Fuel Business">
      <CFuelBusiness
        landId={Number(id)}
        fuelBusinessData={data?.fuelBusiness}
        isLoading={isLoading}
        isLoadingUpdateFuelBusiness={isLoadingUpdateFuelBusiness}
        isLoadingAddFuelBusiness={isLoadingAddFuelBusiness}
        onEditFuelBusiness={onEditFuelBusiness}
        onAddFuelBusiness={onAddFuelBusiness}
      />
    </Layout>
  );
}
