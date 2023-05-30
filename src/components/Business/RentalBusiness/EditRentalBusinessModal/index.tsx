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
import { useForm } from "react-hook-form";
import {
  IEditRentalBusinessModalProps,
  AddRentalFormType,
} from "../../../../interfaces";
import { GradientBorder } from "../../..";

export default function AddBusinessModal({
  rentalBusinessData,
  onEditRentalBusiness,
  isLoadingEditRentalBusiness,
}: IEditRentalBusinessModalProps) {
  const {
    formState: { errors },
    handleSubmit: handleEditRentalBusiness,
    register: registerAddRental,
    setValue,
  } = useForm<AddRentalFormType>();

  useEffect(() => {
    if (rentalBusinessData) {
      setValue("price", rentalBusinessData.price);
      setValue("description", rentalBusinessData.description);
    }
  }, [rentalBusinessData]);

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const toast = useToast();

  const onSubmitRentalBusiness = handleEditRentalBusiness(
    (data) =>
      onEditRentalBusiness &&
      onEditRentalBusiness(
        rentalBusinessData.landId,
        data.price,
        data.description
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
            Edit Rental Business
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {" "}
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
                    h="44"
                    maxW="100%"
                    //  type="description"
                    placeholder="Enter description"
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "gray",
                        borderRadius: "48px",
                      },
                    }}
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
                    isLoading={isLoadingEditRentalBusiness}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="brand"
                    isDisabled={isLoadingEditRentalBusiness}
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
