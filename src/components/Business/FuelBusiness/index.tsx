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
  Image,
} from "@chakra-ui/react";
import { AddBusinessModal, Card, CardBody, CardHeader } from "../..";
import { IFuelBusinessProps } from "../../../interfaces";
import EditFuelBusinessModal from "./EditFuelBusinessModal";

export default function FuelBusiness({
  landId,
  fuelBusinessData,
  onEditFuelBusiness,
  onAddFuelBusiness,
  isLoading,
  isLoadingUpdateFuelBusiness,
  isLoadingAddFuelBusiness,
}: IFuelBusinessProps) {
  return (
    <>
      <Box alignSelf="flex-end">
        <AddBusinessModal
          text="Add Fuel Item"
          type="FUEL"
          landId={landId}
          onAddFuelBusiness={onAddFuelBusiness}
          isLoadingAddFuelBusiness={isLoadingAddFuelBusiness}
        />
      </Box>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text
            fontSize="lg"
            color="#fff"
            fontWeight="bold"
            data-testid="#headingProperties"
          >
            Fuel Business
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Item Name
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
                  Thumbnail
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
              {fuelBusinessData
                ? fuelBusinessData?.map((data) => (
                    <Tr>
                      <Td borderBottomColor="#56577A">
                        <Text
                          fontSize="sm"
                          color="#fff"
                          fontWeight="bold"
                          pb=".5rem"
                        >
                          {data?.itemName}
                        </Text>
                      </Td>
                      <Td borderBottomColor="#56577A">
                        <Text
                          fontSize="sm"
                          color="#fff"
                          fontWeight="bold"
                          pb=".5rem"
                        >
                          {data?.price}
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
                        >
                          {data?.description}
                        </Text>
                      </Td>
                      <Td borderBottomColor="#56577A">
                        <Image
                          borderRadius="full"
                          boxSize="80px"
                          src={data.thumbnail}
                        />
                      </Td>
                      <Td borderBottomColor="#56577A">
                        <EditFuelBusinessModal
                          fuelBusinessData={data}
                          onEditFuelBusiness={onEditFuelBusiness}
                          isLoadingUpdateFuelBusiness={
                            isLoadingUpdateFuelBusiness
                          }
                        />
                      </Td>
                    </Tr>
                  ))
                : ""}
            </Tbody>
          </Table>
        </CardBody>
        {
          //@ts-ignore
          fuelBusinessData && fuelBusinessData.length === 0 ? (
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
          )
        }
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
      </Card>
    </>
  );
}
