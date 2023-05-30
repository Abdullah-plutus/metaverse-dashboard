import React from "react";
import {
  ModalOverlay,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useToast,
  HStack,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { FileRejection } from "react-dropzone";
import { useForm } from "react-hook-form";
import {
  IAddBusinessModalProps,
  AddRentalFormType,
  AddFoodFormType,
  AddFuelFormType,
} from "../../../interfaces";
import { LAND_TYPES } from "../../../constants";
import { Dropzone, GradientBorder } from "../..";

export default function AddBusinessModal({
  text,
  landId,
  type,
  onAddRentalBusiness,
  onAddFoodBusiness,
  onAddFuelBusiness,
  isLoadingAddRentalBusiness,
  isLoadingAddFoodBusiness,
  isLoadingAddFuelBusiness,
}: IAddBusinessModalProps) {
  const {
    formState: { errors },
    handleSubmit: handleAddRentalBusiness,
    register: registerAddRental,
    reset: resetRentalValues,
  } = useForm<AddRentalFormType>();

  const {
    formState: { errors: foodFormErrors },
    handleSubmit: handleAddFoodBusiness,
    register: registerAddFood,
    setValue: setFoodThumbnail,
    setError: setFoodFormError,
    reset: resetFoodValues,
    getValues: getFoodValues,
  } = useForm<AddFoodFormType>();

  const {
    formState: { errors: fuelFormErrors },
    handleSubmit: handleAddFuelBusiness,
    register: registerAddFuel,
    setError: setFuelFormError,
    setValue: setFuelFormValue,
    getValues: getFuelFormValue,
    reset: resetFuelForm,
  } = useForm<AddFuelFormType>();

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const toast = useToast();

  const onSubmitRentalBusiness = handleAddRentalBusiness(
    (data) =>
      onAddRentalBusiness &&
      onAddRentalBusiness(
        landId,
        data.price,
        data.description,
        resetRentalValues,
        onClose
      )
  );

  const onSubmitFoodBusiness = handleAddFoodBusiness(
    (data) =>
      onAddFoodBusiness &&
      onAddFoodBusiness(
        landId,
        data.itemName,
        data.price,
        data.description,
        data.thumbnail,
        setFoodFormError,
        resetFoodValues
      )
  );

  const onSubmitFuelBusiness = handleAddFuelBusiness(
    (data) =>
      onAddFuelBusiness &&
      onAddFuelBusiness(
        landId,
        data.itemName,
        data.price,
        data.description,
        data.thumbnail,
        setFuelFormError,
        resetFuelForm
      )
  );

  const onDropFoodImage = (
    acceptedFiles: File[],
    fileRejections?: FileRejection[]
  ) => {
    if (fileRejections && fileRejections[0]) {
      return toast({
        title: "File Type Error",
        description: "File type must be .jpeg, .jpg or .png",
        isClosable: true,
        duration: 4000,
        status: "error",
      });
    }

    return setFoodThumbnail("thumbnail", acceptedFiles[0], {
      shouldValidate: true,
    });
  };

  const onDropFuelImage = (
    acceptedFiles: File[],
    fileRejections?: FileRejection[]
  ) => {
    if (fileRejections && fileRejections[0]) {
      return toast({
        title: "File Type Error",
        description: "File type must be .jpeg, .jpg or .png",
        isClosable: true,
        duration: 4000,
        status: "error",
      });
    }

    return setFuelFormValue("thumbnail", acceptedFiles[0], {
      shouldValidate: true,
    });
  };

  const modalTitle = (type: string) => {
    switch (type) {
      case LAND_TYPES.RENTAL: {
        return "Add Rental Business";
      }
      case LAND_TYPES.FOOD: {
        return "Add Food Business";
      }
      case LAND_TYPES.FUEL: {
        return "Add Fuel Business";
      }
      default: {
        return "Modal Title";
      }
    }
  };

  const modalForm = (type: string) => {
    switch (type) {
      case LAND_TYPES.RENTAL: {
        return (
          <>
            <form onSubmit={onSubmitRentalBusiness}>
              <FormControl isInvalid={errors.price ? true : false}>
                <FormLabel>Price</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="number"
                    placeholder="Enter price"
                    {...registerAddRental("price", {
                      required: "Price is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {errors.price && errors.price.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={4} isInvalid={errors.description ? true : false}>
                <FormLabel>Description</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Textarea
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="32"
                    //     type="description"
                    placeholder="Enter description"
                    {...registerAddRental("description")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {errors.description && errors.description.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <HStack spacing="2.5">
                  <Button
                    data-testid="#submit"
                    type="submit"
                    variant="brand"
                    isLoading={isLoadingAddRentalBusiness}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingAddRentalBusiness}
                  >
                    Close
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          </>
        );
      }
      case LAND_TYPES.FOOD: {
        return (
          <>
            <form onSubmit={onSubmitFoodBusiness}>
              <FormControl isInvalid={foodFormErrors.itemName ? true : false}>
                <FormLabel>Item Name</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="itemname"
                    placeholder="Enter item name"
                    {...registerAddFood("itemName", {
                      required: "Item name is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors.itemName &&
                    foodFormErrors.itemName.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={foodFormErrors.price ? true : false}
              >
                <FormLabel>Price</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="number"
                    placeholder="Enter price"
                    {...registerAddFood("price", {
                      required: "price is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors.price &&
                    foodFormErrors.price.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={foodFormErrors.description ? true : false}
              >
                <FormLabel>Description</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Textarea
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="32"
                    //  type="description"
                    placeholder="Enter description"
                    {...registerAddFood("description", {
                      required: "Description is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors.description &&
                    foodFormErrors.description.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={foodFormErrors.thumbnail ? true : false}
              >
                <FormLabel>Thumbnail</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "400px", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Dropzone
                    onDrop={onDropFoodImage}
                    fileUploadLoading={false}
                    fileName={getFoodValues("thumbnail")?.name}
                    {...registerAddFood("thumbnail")}
                    file={getFoodValues("thumbnail")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors.thumbnail &&
                    foodFormErrors.thumbnail.message?.toString()}
                </FormErrorMessage>
              </FormControl>

              <ModalFooter>
                <HStack spacing="2.5">
                  <Button
                    variant="brand"
                    type="submit"
                    isLoading={isLoadingAddFoodBusiness}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingAddFoodBusiness}
                  >
                    Close
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          </>
        );
      }
      case LAND_TYPES.FUEL: {
        return (
          <>
            <form onSubmit={onSubmitFuelBusiness}>
              <FormControl isInvalid={fuelFormErrors.itemName ? true : false}>
                <FormLabel>Item Name</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="itemname"
                    placeholder="Enter item name"
                    {...registerAddFuel("itemName", {
                      required: "item name is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {fuelFormErrors &&
                    fuelFormErrors.itemName?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={fuelFormErrors.price ? true : false}
              >
                <FormLabel>Price</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="price"
                    placeholder="Enter price"
                    {...registerAddFuel("price", {
                      required: "Price is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {fuelFormErrors && fuelFormErrors?.price?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={fuelFormErrors.description ? true : false}
              >
                <FormLabel>Description</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Textarea
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="32"
                    //  type="description"
                    placeholder="Enter description"
                    {...registerAddFuel("description")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {fuelFormErrors &&
                    fuelFormErrors.description?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={fuelFormErrors.thumbnail ? true : false}
              >
                <FormLabel>Thumbnail</FormLabel>
                <GradientBorder
                  mb="24px"
                  w={{ base: "400px", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Dropzone
                    onDrop={onDropFuelImage}
                    fileUploadLoading={false}
                    {...registerAddFood("thumbnail")}
                    fileName={getFuelFormValue("thumbnail")?.name}
                    file={getFuelFormValue("thumbnail")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {fuelFormErrors &&
                    foodFormErrors.thumbnail?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <HStack spacing="2.5">
                  <Button
                    variant="brand"
                    type="submit"
                    isLoading={isLoadingAddFuelBusiness}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingAddFuelBusiness}
                  >
                    Close
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          </>
        );
      }
      default: {
        return "Modal Title";
      }
    }
  };

  return (
    <>
      <Button
        data-testid="#showModal"
        variant="brand"
        fontSize="12px"
        type="submit"
        h="45"
        mb="20px"
        mt="20px"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {text}
      </Button>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        {overlay}
        <ModalContent
          //  backgroundColor="brand.800"
          background="linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)"
          textColor="white"
        >
          <ModalHeader data-testid="#modalHeading">
            {modalTitle(type)}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{modalForm(type)}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
