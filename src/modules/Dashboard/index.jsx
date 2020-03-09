/** @jsx jsx */
import {
  Avatar,
  Tag,
  TagLabel,
  Badge,
  TagIcon,
  Box,
  Button,
  Flex,
  Text,
  Grid,
  theme,
  Divider
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import InvoiceTable from "./components/InvoiceTable";
import dayjs from "dayjs";
import faker from "faker";
import Logo from "../../public/static/logo.svg";
import { useMediaPredicate } from "react-media-hook";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const MenuButton = ({ children, ...props }) => {
  return (
    <Button
      variant="ghost"
      variantColor="blue"
      css={{
        color: theme.colors.blue[800]
      }}
    >
      {children}
    </Button>
  );
};

const SubtleCard = ({ label }) => {
  // const md = useMedia({ minWidth: 800 });
  console.log("theme", theme);
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMediaPredicate(`(min-width: ${medium})`);
  const sm = useMediaPredicate(`(min-width: ${small})`);

  return (
    <Box>
      <Text
        color="blue.100"
        textTransform="uppercase"
        letterSpacing={1.3}
        fontWeight={500}
      >
        {label}
      </Text>
      <Flex
        flexDirection={md ? "column" : "row"}
        justify={!md && "space-between"}
        w={!md && "100%"}
        align={!md && "center"}
      >
        <Text color="white" fontWeight={200} fontSize="3xl">
          {"RM " +
            new Intl.NumberFormat("en-MY", {
              maximumSignificantDigits: 3
            }).format(Math.floor(Math.random() * 10000))}
        </Text>

        <Tag
          size="sm"
          rounded="full"
          variant="solid"
          bg="#1e4e8cb8"
          as="button"
          _hover={{
            bg: theme.colors.blue[700]
          }}
          _active={{
            bg: theme.colors.blue[800]
          }}
          mt={sm ? 2 : 0}
          width="max-content"
          height="max-content"
        >
          <TagLabel py={1} px={1} mr={2}>
            View all
          </TagLabel>
          <Box
            css={css`
              background-color: ${theme.colors.blue[800]};
              width: 18px;
              height: 18px;
              border-radius: 50%;
              position: relative;
              margin-right: -4px;
            `}
            id="circle"
          >
            <TagIcon
              icon="chevron-right"
              size="18px"
              css={{
                position: "absolute",
                right: 0,
                color: "white"
              }}
            />
          </Box>
        </Tag>
      </Flex>
    </Box>
  );
};

const ObviousCard = () => {
  const statusChance = Math.random();
  const status =
    statusChance > 0.66 ? "Paid" : statusChance > 0.33 ? "Pending" : "Overdue";
  return (
    <Flex
      direction="column"
      borderRadius={"8px"}
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      bg="white"
    >
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={1}>
          <Text fontWeight={600}>{faker.name.findName()}</Text>
          <Badge
            borderRadius="999px"
            px={3}
            py={"1px"}
            variantColor={
              status === "Pending"
                ? "orange"
                : status === "Paid"
                ? "green"
                : status === "Overdue"
                ? "red"
                : ""
            }
            fontWeight={600}
            textTransform="capitalize"
          >
            {status}
          </Badge>
        </Flex>
        <Text
          color="white"
          fontWeight={400}
          fontSize="xl"
          color="blue.800"
          mb={1}
        >
          {"RM " +
            new Intl.NumberFormat("en-MY", {
              maximumSignificantDigits: 3
            }).format(Math.floor(Math.random() * 10000))}
        </Text>
        <Text color="#6b7280">
          Due {dayjs(randomDate(new Date(2019, 0, 1), new Date())).toNow()}
        </Text>
      </Box>
      <Flex justify="center" bg="gray.50" borderRadius="0 0 8px 8px">
        <Button
          variant="ghost"
          color="gray.500"
          py={1}
          w="100%"
          variantColor="gray"
          fontWeight={400}
          rightIcon="chevron-right"
        >
          View Invoice
        </Button>
      </Flex>
    </Flex>
  );
};
const Index = () => {
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMediaPredicate(`(min-width: ${medium})`);
  const sm = useMediaPredicate(`(min-width: ${small})`);
  return (
    <Flex align="center" minHeight="100vh" direction="column" bg="gray.100">
      <Flex justify="space-between" w="100%" p={4} align="center">
        {/* <Logo viewBox="0 30 256 40" height="40px"></Logo> */}
        <Box w={256}></Box>
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap={8}>
          <MenuButton>Dashboard</MenuButton>
          <MenuButton>Invoices</MenuButton>
          <MenuButton>Clients</MenuButton>
          <MenuButton>Expenses</MenuButton>
        </Grid>
        <Flex align="center">
          <Button
            color="white"
            bg="blue.600"
            leftIcon="add"
            borderRadius={999}
            py={3}
            px={6}
            mr={8}
            _hover={{
              bg: "blue.700",
              transition: "0.3s"
            }}
            _active={{
              bg: "blue.800"
            }}
            fontWeight={400}
          >
            New Invoice
          </Button>
          <Avatar
            mr={4}
            src="https://source.unsplash.com/random/50x50"
            alt="random-image-from-unsplash"
          ></Avatar>
        </Flex>
      </Flex>
      <Flex justify="center" w="100%" p={6} align="center" bg="blue.600" mb={6}>
        <Box width={1054}>
          <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
            <SubtleCard label="overdue"></SubtleCard>
            {!sm && <Divider borderColor="blue.500" my={0}></Divider>}
            <SubtleCard label="in draft"></SubtleCard>
            {!sm && <Divider borderColor="blue.500" my={0}></Divider>}
            <SubtleCard label="total outstanding"></SubtleCard>
          </Grid>
        </Box>
      </Flex>
      <Flex justify="center" w="100%" p={6} align="center" mb={6}>
        <Box width={1054}>
          <Text fontSize="2xl" letterSpacing={1} py={4} color="blue.800">
            Recent Invoices
          </Text>
          <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
            <ObviousCard></ObviousCard>
            <ObviousCard></ObviousCard>
            <ObviousCard></ObviousCard>
          </Grid>
        </Box>
      </Flex>
      <Flex width="100%" mb={16} p={6} justify="center" align="flex-start">
        <Box width={1054}>
          <Text fontSize="2xl" letterSpacing={1} py={4} color="blue.800">
            All Invoices
          </Text>
          <InvoiceTable />
        </Box>
      </Flex>
    </Flex>
  );
};

export default withTheme(Index);
