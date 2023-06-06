import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

const About = () => {
    return (
        <Flex align="center" justify="center" py={10} id="about-section">
            <Box mx="auto">
                <Flex align="center" justify="space-between">
                    <Image
                        src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Hero Image"
                        boxSize="400px"
                        objectFit="cover"
                    />
                    <Box ml={8}>
                        <Heading fontSize="5xl" mb={4} textAlign="left">
                            Welcome to Little Lemon Website
                        </Heading>
                        <Text fontSize="xl" mb={6} textAlign="left">
                            Discover amazing products and services Discover amazing products
                            and services Discover amazing products and servicesDiscover
                            amazing products and services
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default About;
