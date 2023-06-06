import { Box, Heading, Text, Avatar, Flex } from '@chakra-ui/react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            rating: 4,
            review: 'Great food and excellent service!',
            avatar: '/path/to/avatar-1.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 5,
            review: 'Amazing experience! Highly recommended!',
            avatar: '/path/to/avatar-2.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 5,
            review: 'Amazing experience! Highly recommended!',
            avatar: '/path/to/avatar-2.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 5,
            review: 'Amazing experience! Highly recommended!',
            avatar: '/path/to/avatar-2.jpg',
        },
    ];

    return (
        <Box textAlign="center">
            <Heading as="h2" mb={4}>
                Testimonials
            </Heading>
            <Flex justifyContent="center">
                {testimonials.map((testimonial) => (
                    <Box key={testimonial.id} p={4} textAlign="center">
                        <Avatar src={testimonial.avatar} size="lg" mb={4} />
                        <Heading as="h3" size="md" mb={2}>
                            {testimonial.name}
                        </Heading>
                        <Text color="gray.500" mb={4}>
                            {testimonial.review}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Testimonials;
