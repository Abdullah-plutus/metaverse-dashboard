export interface IRentalBusiness {
  landId: number;
  price: number;
  description: string;
}

export interface IFuelBusiness {
  landId: number;
  itemName: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface IFoodBusiness {
  landId: number;
  itemName: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface IRentalBusinessProps {
  rentalBusinessData: IRentalBusiness;
  onEditRentalBusiness: (
    landId: number,
    price: number,
    description: string
  ) => void;
  isLoading: boolean;
  isLoadingUpdateRentalBusiness: boolean;
}

export interface IEditRentalBusinessModalProps {
  rentalBusinessData: IRentalBusiness;
  onEditRentalBusiness: (
    landId: number,
    price: number,
    description: string
  ) => void;
  isLoadingEditRentalBusiness: boolean;
}

export interface IEditFoodBusinessModalProps {
  foodBusinessData: IFoodBusiness;
  onEditFoodBusiness: (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File | string
  ) => void;
  isLoadingUpdateFoodBusiness: boolean;
}

export interface IEditFuelBusinessModalProps {
  fuelBusinessData: IFuelBusiness;
  onEditFuelBusiness: (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File | string
  ) => void;
  isLoadingUpdateFuelBusiness: boolean;
}

export interface IFuelBusinessProps {
  landId: number;
  fuelBusinessData: [IFuelBusiness];
  onEditFuelBusiness: (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: string | File
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
  isLoading: boolean;
  isLoadingUpdateFuelBusiness: boolean;
  isLoadingAddFuelBusiness: boolean;
}

export interface IFoodBusinessProps {
  landId: number;
  foodBusinessData: [IFoodBusiness] | undefined;
  onAddFoodBusiness: (
    landId: number,
    itemName: string,
    price: number,
    description: string,
    thumbnail: File,
    setError: Function,
    resetFoodValues: Function
  ) => void;
  onEditFoodBusiness: (
    landId: number,
    previousItemName: string,
    itemName: string,
    price: number,
    description: string,
    thumbnail: string | File
  ) => void;
  isLoading: boolean;
  isLoadingUpdateFoodBusiness: boolean;
  isLoadingAddFoodBusiness: boolean;
}
