import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Flex align="center" justify="center" py={10}>
            <Box mx="auto">
                <Flex align="center" justify="space-between">
                    <Box mr={8}>
                        <Heading fontSize="5xl" mb={4}>
                            Welcome to Little Lemon Restaurant
                        </Heading>
                        <Text fontSize="2xl" mb={6}>
                            Discover amazing products and services
                        </Text>
                        <Button colorScheme="blue" size="lg">
                            Get Started
                        </Button>
                    </Box>
                    <Image
                        src="https://images.pexels.com/photos/16297410/pexels-photo-16297410/free-photo-of-food-plate-salad-dinner.jpeg"
                        alt="Hero Image"
                        boxSize="400px"
                        objectFit="cover"
                    />
                </Flex>
            </Box>
        </Flex>
    );
};

export default HeroSection;
