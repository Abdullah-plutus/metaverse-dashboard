import React, { useEffect } from "react";
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
  IEditFoodBusinessModalProps,
  EditFoodFormType,
} from "../../../../interfaces";
import { Dropzone, GradientBorder } from "../../..";

export default function EditFuelBusinessModal({
  foodBusinessData,
  onEditFoodBusiness,
  isLoadingUpdateFoodBusiness,
}: IEditFoodBusinessModalProps) {
  const {
    formState: { errors: foodFormErrors },
    handleSubmit,
    register,
    setValue,
    setError: setFoodFormError,
    setValue: setFoodFormValue,
    getValues: getFoodFormValue,
  } = useForm<EditFoodFormType>();

  useEffect(() => {
    if (foodBusinessData) {
      setValue("itemName", foodBusinessData.itemName);
      setValue("price", foodBusinessData.price);
      setValue("description", foodBusinessData.description);
      setValue("thumbnail", foodBusinessData.thumbnail);
    }
  }, [foodBusinessData]);

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const toast = useToast();

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

    return setFoodFormValue("thumbnail", acceptedFiles[0], {
      shouldValidate: true,
    });
  };

  const onSubmitFoodBusiness = handleSubmit(
    (data) =>
      onEditFoodBusiness &&
      onEditFoodBusiness(
        foodBusinessData.landId,
        foodBusinessData.itemName,
        data.itemName,
        data.price,
        data.description,
        data.thumbnail
      )
  );

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
        Edit
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
            Edit Food Business
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                    {...register("itemName", {
                      required: "item name is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors &&
                    foodFormErrors.itemName?.message?.toString()}
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
                    type="price"
                    placeholder="Enter price"
                    {...register("price", {
                      required: "Price is required",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors && foodFormErrors?.price?.message?.toString()}
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
                    h="32"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    // type="description"
                    placeholder="Enter description"
                    {...register("description")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors &&
                    foodFormErrors.description?.message?.toString()}
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
                    {...register("thumbnail")}
                    //@ts-ignore
                    fileName={getFoodFormValue("thumbnail")?.name}
                    file={getFoodFormValue("thumbnail")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {foodFormErrors &&
                    foodFormErrors.thumbnail?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <HStack spacing="2.5">
                  <Button
                    variant="brand"
                    type="submit"
                    isLoading={isLoadingUpdateFoodBusiness}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingUpdateFoodBusiness}
                  >
                    Close
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
