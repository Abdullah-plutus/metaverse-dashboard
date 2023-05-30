import React from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { CRentalBusiness, Layout } from "../../../components";
import {
  useGetRentalBusiness,
  useUpdateRentalBusiness,
} from "../../../queries";

export default function Business() {
  const { id } = useParams();
  const toast = useToast();

  const { data, isLoading, refetch } = useGetRentalBusiness(Number(id));

  const {
    mutate: mutateEditRentalBusiness,
    isLoading: isLoadingUpdateRentalBusiness,
  } = useUpdateRentalBusiness();

  const onEditRentalBusiness = (
    landId: number,
    price: number,
    description: string
  ) => {
    console.log("price in mutate", typeof price);
    mutateEditRentalBusiness(
      { landId, price, description },
      {
        onSuccess: (res) => {
          refetch();
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

  return (
    <Layout pageTitle="Rental Business">
      <CRentalBusiness
        rentalBusinessData={data?.rentalBusiness}
        onEditRentalBusiness={onEditRentalBusiness}
        isLoading={isLoading}
        isLoadingUpdateRentalBusiness={isLoadingUpdateRentalBusiness}
      />
    </Layout>
  );
}
