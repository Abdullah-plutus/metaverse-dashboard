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
import { IFoodBusinessProps } from "../../../interfaces";
import EditFoodBusinessModal from "./EditFoodBusinessModal";

export default function FoodBusiness({
  landId,
  foodBusinessData,
  onEditFoodBusiness,
  onAddFoodBusiness,
  isLoading,
  isLoadingUpdateFoodBusiness,
  isLoadingAddFoodBusiness,
}: IFoodBusinessProps) {
  return (
    <>
      <Box alignSelf="flex-end">
        <AddBusinessModal
          text="Add Food Item"
          type="FOOD"
          landId={landId}
          onAddFoodBusiness={onAddFoodBusiness}
          isLoadingAddFoodBusiness={isLoadingAddFoodBusiness}
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
            Food Business
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
              {foodBusinessData
                ? foodBusinessData?.map((data) => (
                    <Tr>
                      {/* <Td
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
                            {data?.landId}
                          </Text>
                        </Flex>
                      </Td> */}
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
                        <EditFoodBusinessModal
                          foodBusinessData={data}
                          onEditFoodBusiness={onEditFoodBusiness}
                          isLoadingUpdateFoodBusiness={
                            isLoadingUpdateFoodBusiness
                          }
                        />
                      </Td>
                    </Tr>
                  ))
                : ""}
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
        {
          //@ts-ignore
          foodBusinessData && foodBusinessData.length === 0 ? (
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
      </Card>
    </>
  );
}
