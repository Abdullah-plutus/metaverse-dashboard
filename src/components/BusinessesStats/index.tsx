import React from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card, CardBody } from "../../components";

export default function BusinessesStats() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
      <Card>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb="2px"
              >
                Today's Money
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color="#fff">
                  $53,000
                </StatNumber>
                <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="green.400"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +55%
                </StatHelpText>
              </Flex>
            </Stat>
            {/* <IconBox as='box' h={'45px'} w={'45px'} bg='brand.200'>
          <WalletIcon h={'24px'} w={'24px'} color='#fff' />
      </IconBox> */}
          </Flex>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
