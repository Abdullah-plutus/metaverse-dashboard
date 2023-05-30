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
  IEditFuelBusinessModalProps,
  EditFuelFormType,
} from "../../../../interfaces";
import { Dropzone, GradientBorder } from "../../..";

export default function EditFuelBusinessModal({
  fuelBusinessData,
  onEditFuelBusiness,
  isLoadingUpdateFuelBusiness,
}: IEditFuelBusinessModalProps) {
  const {
    formState: { errors: fuelFormErrors },
    handleSubmit,
    register,
    setValue,
    setError: setFuelFormError,
    setValue: setFuelFormValue,
    getValues: getFuelFormValue,
  } = useForm<EditFuelFormType>();

  useEffect(() => {
    if (fuelBusinessData) {
      setValue("itemName", fuelBusinessData.itemName);
      setValue("price", fuelBusinessData.price);
      setValue("description", fuelBusinessData.description);
      setValue("thumbnail", fuelBusinessData.thumbnail);
    }
  }, [fuelBusinessData]);

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const toast = useToast();

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

  const onSubmitFuelBusiness = handleSubmit(
    (data) =>
      onEditFuelBusiness &&
      onEditFuelBusiness(
        fuelBusinessData.landId,
        fuelBusinessData.itemName,
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
            Edit Fuel Business
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                    {...register("itemName", {
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
                    {...register("price", {
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
                    h="32"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    // type="description"
                    placeholder="Enter description"
                    {...register("description")}
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
                    {...register("thumbnail")}
                    //@ts-ignore
                    fileName={getFuelFormValue("thumbnail")?.name}
                    file={getFuelFormValue("thumbnail")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {fuelFormErrors &&
                    fuelFormErrors.thumbnail?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <HStack spacing="2.5">
                  <Button
                    variant="brand"
                    type="submit"
                    isLoading={isLoadingUpdateFuelBusiness}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingUpdateFuelBusiness}
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
