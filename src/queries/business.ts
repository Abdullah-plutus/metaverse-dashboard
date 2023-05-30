import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../constants";
import { apiClient } from "../services";

const useGetRentalBusiness = (landId: number) => {
  const getRentalBusiness = async ({ queryKey }: { queryKey: any }) => {
    const { data } = await apiClient.get(
      `${API.ROUTES.GET_RENTAL_BUSINESS}/${queryKey[1]}`
    );
    return data;
  };

  return useQuery({
    queryKey: ["rentalBusiness", landId],
    queryFn: getRentalBusiness,
  });
};

const useGetFoodBusiness = (landId: number) => {
  const getFoodBusiness = async ({ queryKey }: { queryKey: any }) => {
    const { data } = await apiClient.get(
      `${API.ROUTES.GET_FOOD_BUSINESS}/${queryKey[1]}`
    );

    return data;
  };

  return useQuery({
    queryKey: ["foodBusiness", landId],
    queryFn: getFoodBusiness,
  });
};

const useGetFuelBusiness = (landId: number) => {
  const getFuelBusiness = async ({ queryKey }: { queryKey: any }) => {
    const { data } = await apiClient.get(
      `${API.ROUTES.GET_FUEL_BUSINESS}/${queryKey[1]}`
    );

    return data;
  };

  return useQuery({
    queryKey: ["fuelBusiness", landId],
    queryFn: getFuelBusiness,
  });
};

const useAddRentalBusiness = () => {
  const addRentalBusiness = async (body: {
    landId: number;
    price: number;
    description: string;
  }) => {
    const res = await apiClient.post(API.ROUTES.ADD_RENTAL_BUSINESS, body);
    return res;
  };

  return useMutation(addRentalBusiness);
};

const useAddFoodBusiness = () => {
  const addFoodBusiness = async (body: {
    landId: number;
    itemName: string;
    price: number;
    description: string;
    thumbnail: File;
  }) => {
    const formData = new FormData();

    //@ts-ignore
    formData.append("landId", body.landId);
    formData.append("itemName", body.itemName);
    //@ts-ignore
    formData.append("price", body.price);
    formData.append("description", body.description);
    formData.append("thumbnail", body.thumbnail);
    const res = await apiClient.post(API.ROUTES.ADD_FOOD_BUSINESS, formData);
    return res;
  };

  return useMutation(addFoodBusiness);
};

const useAddFuelBusiness = () => {
  const addFuelBusiness = async (body: {
    landId: number;
    itemName: string;
    price: number;
    description: string;
    thumbnail: File | string;
  }) => {
    const formData = new FormData();

    //@ts-ignore
    formData.append("landId", body.landId);
    formData.append("itemName", body.itemName);
    //@ts-ignore
    formData.append("price", body.price);
    formData.append("description", body.description);
    formData.append("thumbnail", body.thumbnail);
    const res = await apiClient.post(API.ROUTES.ADD_FUEL_BUSINESS, formData);
    return res;
  };

  return useMutation(addFuelBusiness);
};

const useUpdateRentalBusiness = () => {
  const updateRentalBusiness = async (body: {
    landId: number;
    price: number;
    description: string;
  }) => {
    const res = await apiClient.post(API.ROUTES.UPDATE_RENTAL_BUSINESS, body);
    return res;
  };

  return useMutation(updateRentalBusiness);
};

const useUpdateFoodBusiness = () => {
  const updateFoodBusiness = async (body: {
    landId: number;
    previousItemName: string;
    itemName: string;
    price: number;
    description: string;
    thumbnail: File | string;
  }) => {
    const formData = new FormData();

    //@ts-ignore
    formData.append("landId", body.landId);
    formData.append("previousItemName", body.previousItemName);
    formData.append("itemName", body.itemName);
    //@ts-ignore
    formData.append("price", body.price);
    formData.append("description", body.description);
    formData.append("thumbnail", body.thumbnail);
    const res = await apiClient.post(API.ROUTES.UPDATE_FOOD_BUSINESS, formData);
    return res;
  };

  return useMutation(updateFoodBusiness);
};

const useUpdateFuelBusiness = () => {
  const updateFuelBusiness = async (body: {
    landId: number;
    previousItemName: string;
    itemName: string;
    price: number;
    description: string;
    thumbnail: File | string;
  }) => {
    const formData = new FormData();

    //@ts-ignore
    formData.append("landId", body.landId);
    formData.append("previousItemName", body.previousItemName);
    formData.append("itemName", body.itemName);
    //@ts-ignore
    formData.append("price", body.price);
    formData.append("description", body.description);
    formData.append("thumbnail", body.thumbnail);
    const res = await apiClient.post(API.ROUTES.UPDATE_FUEL_BUSINESS, formData);
    return res;
  };

  return useMutation(updateFuelBusiness);
};

export {
  useGetRentalBusiness,
  useGetFuelBusiness,
  useGetFoodBusiness,
  useAddRentalBusiness,
  useAddFoodBusiness,
  useAddFuelBusiness,
  useUpdateRentalBusiness,
  useUpdateFoodBusiness,
  useUpdateFuelBusiness,
};
