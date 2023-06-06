import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';

const Highlights = () => {
    const dishes = [
        {
            id: 1,
            title: 'Weekly Special',
            name: 'Delicious Pasta',
            description: 'A mouthwatering pasta dish with homemade sauce',
            price: '$12.99',
            image:
                'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 1,
            title: 'Weekly Special',
            name: 'Delicious Pasta',
            description: 'A mouthwatering pasta dish with homemade sauce',
            price: '$12.99',
            image:
                'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 1,
            title: 'Weekly Special',
            name: 'Delicious Pasta',
            description: 'A mouthwatering pasta dish with homemade sauce',
            price: '$12.99',
            image:
                'https://images.pexels.com/photos/10684063/pexels-photo-10684063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    return (
        <Box py={8} align="center" justify="center" id="menu">
            <Heading as="h2" size="lg" mb={6}>
                Highlights
            </Heading>
            <Flex overflowX="auto" align="center" justify="center">
                {dishes.map((dish) => (
                    <Box key={dish.id} maxW="300px" mx={4}>
                        <Image
                            src={dish.image}
                            alt={dish.name}
                            objectFit="cover"
                            boxSize="200px"
                            mb={4}
                        />
                        <Heading as="h3" size="md" mb={2}>
                            {dish.title}
                        </Heading>
                        <Text>{dish.name}</Text>
                        <Text>{dish.description}</Text>
                        <Text mt={2} fontWeight="bold">
                            {dish.price}
                        </Text>
                    </Box>
                ))}
            </Flex>
            <Button colorScheme="blue" mt={6}>
                Order Online
            </Button>
        </Box>
    );
};

export default Highlights;
