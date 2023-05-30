import React from "react";
import {
  Flex,
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
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader } from "..";
import AddBusinessModal from "./AddBusinsessModal";
import { LAND_STATUS } from "../../constants";
import { IPropertiesProps } from "../../interfaces";
import { getPageRouteName } from "../../utils";

export default function Properties({
  dataProperties,
  onAddRentalBusiness,
  onAddFoodBusiness,
  onAddFuelBusiness,
  isLoadingProperties,
  isLoadingAddRentalBusiness,
  isLoadingAddFoodBusiness,
  isLoadingAddFuelBusiness,
}: IPropertiesProps) {
  const navigate = useNavigate();

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
      <CardHeader p="6px 0px 22px 0px">
        <Text
          fontSize="lg"
          color="#fff"
          fontWeight="bold"
          data-testid="#headingProperties"
        >
          Properties
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
                Type
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataProperties?.map((row, index, arr) => {
              return (
                <>
                  <Tr
                    cursor="pointer"
                    onClick={() => {
                      if (row.status !== LAND_STATUS.VACANT)
                        navigate(
                          `/${getPageRouteName(row.type)}-business/${
                            row.landId
                          }`
                        );
                    }}
                  >
                    <Td
                      minWidth={{ sm: "250px" }}
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
                          {row.landId}
                        </Text>
                      </Flex>
                    </Td>
                    <Td borderBottomColor="#56577A">
                      <Text
                        fontSize="sm"
                        color="#fff"
                        fontWeight="bold"
                        pb=".5rem"
                      >
                        {row.type}
                      </Text>
                    </Td>
                    <Td borderBottomColor="#56577A">
                      {row.status === LAND_STATUS.VACANT ? (
                        <AddBusinessModal
                          text="Set Up Business"
                          landId={row.landId}
                          type={row.type}
                          onAddRentalBusiness={onAddRentalBusiness}
                          onAddFoodBusiness={onAddFoodBusiness}
                          onAddFuelBusiness={onAddFuelBusiness}
                          isLoadingAddRentalBusiness={
                            isLoadingAddRentalBusiness
                          }
                          isLoadingAddFoodBusiness={isLoadingAddFoodBusiness}
                          isLoadingAddFuelBusiness={isLoadingAddFuelBusiness}
                        />
                      ) : (
                        row.status
                      )}
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
      {isLoadingProperties ? (
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
      {dataProperties?.length === 0 ? (
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
