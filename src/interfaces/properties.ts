export interface IProperties {
  //  ownerId: string;
  landId: number;
  type: string;
  status: string;
}

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

export interface EditFuelFormType {
  itemName: string;
  price: number;
  description: string;
  thumbnail: File | string;
}

export interface EditFoodFormType {
  itemName: string;
  price: number;
  description: string;
  thumbnail: File | string;
}

export interface IPropertiesProps {
  dataProperties: IProperties[];
  onAddRentalBusiness: (
    landId: number,
    price: number,
    description: string,
    resetRentalValues: Function,
    onClose: Function
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
  isLoadingProperties: boolean;
  isLoadingAddRentalBusiness: boolean;
  isLoadingAddFoodBusiness: boolean;
  isLoadingAddFuelBusiness: boolean;
}

export interface IAddBusinessModalProps {
  text: string;
  landId: number;
  type: string;
  onAddRentalBusiness?: (
    landId: number,
    price: number,
    description: string,
    resetRentalValues: Function,
    onClose: Function
  ) => void;
  onAddFoodBusiness?: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFoodValues: Function
  ) => void;
  onAddFuelBusiness?: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFuelValues: Function
  ) => void;
  isLoadingAddRentalBusiness?: boolean;
  isLoadingAddFoodBusiness?: boolean;
  isLoadingAddFuelBusiness?: boolean;
}
