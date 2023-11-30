import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isLarge = useBreakpointValue({ lg: true });
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">GOT</Heading>
        </Box>
        <Spacer />
        {isLarge ? (
          <ButtonGroup gap="2">
            <Button colorScheme="teal">Houses</Button>
            <Button colorScheme="teal">Persons</Button>
            <Button colorScheme="teal">Quotes</Button>
          </ButtonGroup>
        ) : (
          <Menu>
            <MenuButton as={Button}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem></MenuItem>
              <MenuItem>
                <NavLink to="/houses">Houses</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink  to="/persons">Persons</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/quotes">Quotes</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
