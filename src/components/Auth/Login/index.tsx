import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";
import GradientBorder from "../../Shared/GradientBorder";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import { ILoginProps, LoginFormType } from "../../../interfaces";

function Login({ handleLogin, isLoading }: ILoginProps) {
  const titleColor = "white";
  const textColor = "gray.400";
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    reset,
  } = useForm<LoginFormType>();

  const submit = handleSubmit(
    (data) =>
      handleLogin &&
      handleLogin(data.username, data.email, data.password, setError, reset)
  );

  return (
    <Flex
      position="relative"
      background="linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)"
    >
      <Flex
        minH="100vh"
        h={{ base: "120vh", lg: "fit-content" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px="50px"
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Nice to see you!
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your username or email and password to sign in
            </Text>
            <form onSubmit={submit}>
              <FormControl isInvalid={errors.username ? true : false}>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Username
                </FormLabel>
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
                    h="46px"
                    placeholder="Your username"
                    {...register("username")}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {errors.username && errors.username.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email ? true : false}>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Email
                </FormLabel>
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
                    h="46px"
                    placeholder="Your email adress"
                    {...register("email", {
                      // validate: (v) =>
                      //   // eslint-disable-next-line no-useless-escape
                      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                      //     v
                      //   ) || "Please enter a valid Email!",
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {errors.email && errors.email.message?.toString()}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password ? true : false}>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                >
                  Password
                </FormLabel>
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
                    type="password"
                    placeholder="Your password"
                    {...register("password", {
                      required: "Password is required!",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                </GradientBorder>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <DarkMode>
                  <Switch id="remember-login" colorScheme="brand" me="10px" />
                </DarkMode>
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                  color="white"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                data-testid="#submit"
                variant="brand"
                fontSize="10px"
                type="submit"
                w="100%"
                maxW="350px"
                h="45"
                mb="20px"
                mt="20px"
                isLoading={isLoading}
              >
                SIGN IN
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="80px"
        >
          {/* <AuthFooter /> */}
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX="hidden"
          h="100%"
          maxW={{ md: "50vw", lg: "50vw" }}
          minH="100vh"
          w="960px"
          position="absolute"
          left="0px"
        >
          <Box
            bgImage="url('/assets/img/signInImage.png')"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"

            //position='absolute'
          >
            <Text
              textAlign="center"
              color="white"
              letterSpacing="8px"
              fontSize="20px"
              fontWeight="500"
            >
              INSPIRED BY THE FUTURE:
            </Text>
            <Text
              textAlign="center"
              color="transparent"
              letterSpacing="8px"
              fontSize="36px"
              fontWeight="bold"
              bgClip="text !important"
              bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
            >
              RELETAVITY UI DASHBOARD
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Login;
