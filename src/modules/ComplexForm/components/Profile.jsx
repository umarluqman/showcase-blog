import * as React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  Grid,
  theme
} from "@chakra-ui/core";
import { useMediaPredicate } from "react-media-hook";

const Profile = ({ values, ...formProps }) => {
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMediaPredicate(`(min-width: ${medium})`);
  return (
    <Grid templateColumns={md ? "1fr 2fr" : "1fr"} p={4} mt={2}>
      <Box mr={8} mb={4}>
        <Text fontSize="xl" mb={4}>
          Profile
        </Text>
        <Text color="gray.500">
          This information will be shown publicly so be careful what information
          you provide
        </Text>
      </Box>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        mt={2}
      >
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          gap={4}
          mb={8}
          width="100%"
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              size="md"
              as="input"
              variant="outline"
              isFullWidth
              focusBorderColor="blue.500"
              errorBorderColor="red.500"
              value={values.firstName}
              {...formProps}
              id="firstName"
            />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              size="md"
              as="input"
              variant="outline"
              isFullWidth
              focusBorderColor="blue.500"
              errorBorderColor="red.500"
              value={values.lastName}
              {...formProps}
              id="lastName"
            />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
        </Grid>
        <FormControl
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          mb={8}
        >
          <FormLabel>Picture</FormLabel>
          <Button variant="solid">Change your picture</Button>
        </FormControl>
        <FormControl mb={8} width="100%">
          <FormLabel>Username</FormLabel>
          <Input
            size="md"
            as="input"
            variant="outline"
            isFullWidth
            focusBorderColor="blue.500"
            errorBorderColor="red.500"
          />
        </FormControl>
        <FormControl mb={8} width="100%">
          <FormLabel>About you</FormLabel>
          <Textarea
            focusBorderColor="blue.500"
            errorBorderColor="red.500"
            value={values.aboutYou}
            {...formProps}
            id="aboutYou"
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
      </Flex>
    </Grid>
  );
};

export default Profile;
