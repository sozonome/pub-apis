import { Box, Flex, Link, Text } from '@chakra-ui/react';

import { EVENT_TYPE_LINK } from '@/lib/constants/events';
import { trackEvent } from '@/lib/utils/trackEvent';

const Footer = () => {
  const handleClickSite = () => {
    trackEvent({
      eventName: 'Click sznm.dev',
      eventData: { type: EVENT_TYPE_LINK },
    });
  };
  return (
    <Flex
      as="footer"
      width="full"
      alignSelf="flex-end"
      // height={[120, 36]}
      justifyContent="center"
    >
      <Box textAlign="center">
        <Text fontSize={['sm', 'md']}>
          2020 - {new Date().getFullYear()}
          {' | '}
          <Link
            href="https://sznm.dev"
            onClick={handleClickSite}
            fontWeight="bold"
            isExternal
          >
            sznm.dev
          </Link>
        </Text>

        <Text fontSize={['xs', 'sm']}>
          Powered by https://api.publicapis.org/
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
