import React from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { Card, CardBody } from "../../components";

export default function BusinessesStats() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing="24px">
      <Card>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Heading size="md"> Rental Business</Heading>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Heading size="md"> Food Business</Heading>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Heading size="md"> Fuel Business</Heading>
          </Flex>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
