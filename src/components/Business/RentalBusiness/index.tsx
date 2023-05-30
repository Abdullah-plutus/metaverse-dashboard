import React from "react";
import {
  Flex,
  Box,
  Button,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { Card, CardBody, CardHeader } from "../..";
import { IRentalBusinessProps } from "../../../interfaces";
import EditRentalBusinessModal from "./EditRentalBusinessModal";

export default function RentalBusiness({
  rentalBusinessData,
  onEditRentalBusiness,
  isLoading,
  isLoadingUpdateRentalBusiness,
}: IRentalBusinessProps) {
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
      <CardHeader p="6px 0px 22px 0px">
        <Text
          fontSize="lg"
          color="#fff"
          fontWeight="bold"
          data-testid="#headingProperties"
        >
          Rental Business
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color="#fff">
          <Thead>
            <Tr my=".8rem" ps="0px" color="gray.400">
              <Th
                ps="0px"
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                LandId
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Price
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                description
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {rentalBusinessData ? (
              <Tr>
                <Td
                  //      minWidth={{ sm: "250px" }}
                  ps="0px"
                  borderBottomColor="#56577A"
                >
                  <Flex
                    alignItems="center"
                    py=".8rem"
                    minWidth="100%"
                    flexWrap="nowrap"
                  >
                    <Text fontSize="sm" color="#fff" minWidth="100%">
                      {rentalBusinessData?.landId}
                    </Text>
                  </Flex>
                </Td>
                <Td borderBottomColor="#56577A">
                  <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
                    {rentalBusinessData?.price}
                  </Text>
                </Td>
                <Td borderBottomColor="#56577A">
                  <Text
                    fontSize="sm"
                    color="#fff"
                    fontWeight="bold"
                    pb=".5rem"
                    style={{
                      whiteSpace: "nowrap",
                      width: "250px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    // overflow="hidden"
                  >
                    {rentalBusinessData?.description}
                  </Text>
                </Td>
                <Td borderBottomColor="#56577A">
                  <EditRentalBusinessModal
                    rentalBusinessData={rentalBusinessData}
                    onEditRentalBusiness={onEditRentalBusiness}
                    isLoadingEditRentalBusiness={isLoadingUpdateRentalBusiness}
                  />
                </Td>
              </Tr>
            ) : (
              ""
            )}
          </Tbody>
        </Table>
      </CardBody>
      {isLoading ? (
        <Box
          id="emptyComponent"
          display="flex"
          py="12"
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />{" "}
        </Box>
      ) : (
        ""
      )}
      {rentalBusinessData === null ? (
        <Box
          id="emptyComponent"
          display="flex"
          py="12"
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          No records available
        </Box>
      ) : (
        ""
      )}
    </Card>
  );
}
