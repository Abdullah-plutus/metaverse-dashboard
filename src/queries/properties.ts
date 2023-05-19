import { useMutation } from "@tanstack/react-query";
import { API } from "../constants";
import { apiClient } from "../services";

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
    const res = await apiClient.post(API.ROUTES.ADD_FUEL_BUSINESS, formData);
    return res;
  };

  return useMutation(addFuelBusiness);
};

export { useAddRentalBusiness, useAddFoodBusiness, useAddFuelBusiness };
