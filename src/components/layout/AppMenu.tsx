import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Spinner,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

import { APP_NAME } from "../../pages/_document";

type AppsType = {
  name: string;
  description?: string;
  icon: string;
  url: string;
};

const PROJECT_LIST_URL = `${process.env.NEXT_PUBLIC_PROJECTS_LIST_URL}`;

const AppMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [isBiggerThanMobile] = useMediaQuery("(min-width: 480px)");
  const [apps, setApps] = useState<Array<AppsType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${PROJECT_LIST_URL}`)
      .then((res) => res.json())
      .then((result) => {
        setApps(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <IconButton
        marginLeft={2}
        aria-label="app-menu"
        icon={<BiMenu />}
        background="none"
        onClick={onOpen}
      />
      <Drawer
        placement={isBiggerThanMobile ? "right" : "top"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <Heading size="xs">More from sznm.dev</Heading>
          </DrawerHeader>

          <DrawerBody>
            {loading && <Spinner />}
            {apps
              .filter((app) => app.name !== APP_NAME)
              .map(({ name, icon, url, description }, index) => (
                <Link
                  key={index}
                  href={url}
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    marginY={4}
                    alignItems="center"
                    padding={2}
                    borderRadius={12}
                    _hover={{
                      backgroundColor:
                        colorMode === "light" ? "gray.200" : "gray.600",
                    }}
                  >
                    <Image src={icon} width={12} />
                    <Box marginLeft={4}>
                      <Heading size="sm">{name}</Heading>
                      {description && <Text fontSize="xs">{description}</Text>}
                    </Box>
                  </Flex>
                </Link>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppMenu;
