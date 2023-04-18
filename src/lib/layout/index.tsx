import { Box, Flex } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Meta />
      <Flex
        margin="0 auto"
        flexWrap="wrap"
        maxWidth={1200}
        width="100%"
        padding={8}
        minHeight="100vh"
      >
        <Header />
        <Box as="main" width="100%" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
