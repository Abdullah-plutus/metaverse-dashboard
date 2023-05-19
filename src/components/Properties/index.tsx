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
} from "@chakra-ui/react";
import { Card, CardBody, CardHeader } from "..";
import AddBusinessModal from "./AddBusinsessModal";
import { LAND_STATUS } from "../../constants";
import { IPropertiesProps } from "../../interfaces";

const tablesTableData = [
  {
    landId: 123,
    type: "RENTAL",
    status: "VACANT",
  },
  {
    landId: 123,
    type: "RENTAL",
    status: "VACANT",
  },
  {
    landId: 123,
    type: "RENTAL",
    status: "RUNNING",
  },
  {
    landId: 125,
    type: "FUEL",
    status: "VACANT",
  },
  {
    landId: 121,
    type: "FOOD",
    status: "VACANT",
  },
];

export default function Properties({
  onAddRentalBusiness,
  onAddFoodBusiness,
  onAddFuelBusiness,
  isLoadingAddRentalBusiness,
  isLoadingAddFoodBusiness,
  isLoadingAddFuelBusiness,
}: IPropertiesProps) {
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="lg" color="#fff" fontWeight="bold">
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
            {tablesTableData.map((row, index, arr) => {
              return (
                <>
                  <Tr>
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
    </Card>
  );
}
