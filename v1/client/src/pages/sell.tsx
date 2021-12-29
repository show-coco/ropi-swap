import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";

import { Header } from "components/elements/Header/Header";
import { tokenList, useDex } from "hooks/useDex";
import { useWallet } from "hooks/useWallet";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { ArrowIcon } from "components/elements/Icon/ArrowIcon";

const Home: NextPage = () => {
  const wallet = useWallet();
  const dex = useDex();

  useEffect(() => {
    wallet.init();
    dex.setMode("sell");
  }, []);

  return (
    <Box bgColor="#F3F5FA" minH="100vh">
      <Head>
        <title>Sell Token</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...wallet} />

      <Center as="main" h="70vh">
        <Box
          w="400px"
          boxShadow="md"
          p="30px"
          borderRadius="8px"
          bgColor="white"
        >
          <Flex gap="10px">
            <NumberInput
              min={0}
              flex="1"
              value={dex.cost}
              onChange={(_, num) => dex.onChangeCost(num)}
              precision={2}
              step={0.2}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select w="100px" onChange={dex.onChangeToken}>
              {tokenList.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </Select>
          </Flex>

          <Center my="20px">
            <ArrowIcon />
          </Center>

          <Flex gap="10px">
            <Input flex="1" readOnly value={dex.amount} />
            <Input w="100px" value="ETH" readOnly />
          </Flex>

          <Button w="100%" mt="20px" colorScheme="pink" onClick={dex.sellToken}>
            Sell token
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
