export interface AddRentalFormType {
  price: number;
  description: string;
}

export interface AddFoodFormType {
  itemName: string;
  price: number;
  description: string;
  thumbnail: File;
}

export interface AddFuelFormType {
  itemName: string;
  price: number;
  description: string;
  thumbnail: File;
}

export interface IPropertiesProps {
  onAddRentalBusiness: (
    landId: number,
    price: number,
    description: string,
    resetRentalValues: Function
  ) => void;
  onAddFoodBusiness: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFoodValues: Function
  ) => void;
  onAddFuelBusiness: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFuelValues: Function
  ) => void;
  isLoadingAddRentalBusiness: boolean;
  isLoadingAddFoodBusiness: boolean;
  isLoadingAddFuelBusiness: boolean;
}

export interface IAddBusinessModalProps {
  landId: number;
  type: string;
  onAddRentalBusiness: (
    landId: number,
    price: number,
    description: string,
    resetRentalValues: Function
  ) => void;
  onAddFoodBusiness: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFoodValues: Function
  ) => void;
  onAddFuelBusiness: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFuelValues: Function
  ) => void;
  isLoadingAddRentalBusiness: boolean;
  isLoadingAddFoodBusiness: boolean;
  isLoadingAddFuelBusiness: boolean;
}
