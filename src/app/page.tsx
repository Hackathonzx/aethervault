import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Link,
  chakra,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const MotionBox = chakra(motion.div, {
  baseStyle: {},
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function Home() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
    >
      <Box
        as="header"
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="lg">AETHERVAULT</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">
            Docs
          </Link>
          <Button colorScheme="yellow">Join Waitlist</Button>
          <Button colorScheme="yellow">Launch Demo</Button>
        </HStack>
      </Box>
      <Box
        as="main"
        mt={10}
        w="full"
        maxW="6xl"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack align="start" p={4} spacingY={4} w={{ base: 'full', md: '50%' }}>
          <Text fontSize="sm">
            EASY PLATFORM FOR TRADING{' '}
            <Box as="span" bg="gray.700" px={2} py={1} borderRadius="full">
              Assets
            </Box>
          </Text>
          <Heading size="2xl">AI-Powered DeFi Asset Management</Heading>
          <Text fontSize="lg">
            Revolutionize how you manage your digital assets with Aethervault.
          </Text>
          <HStack spacing="4">
            <Button colorScheme="yellow">Launch Demo</Button>
            <Button colorScheme="yellow">Join Waitlist</Button>
          </HStack>
        </VStack>
        <Box p={4} w={{ base: 'full', md: '50%' }}>
          {/* Include cards and graphs using Chakra UI components and Framer Motion */}
          {/* ...existing code... */}
        </Box>
      </Box>
    </MotionBox>
  );
}
