import { Box, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <Box py={4}>
            <HStack
                spacing={4}
                alignItems="center"
                justifyContent="space-between"
                px={8}
            >
                <Box w="8" h="8" bg="gray.500" transform="rotate(-45deg)" />
                <HStack spacing={8}>
                    <a href="/">Home</a>
                    <a href="#about" onClick={handleClick('about')}>
                        About
                    </a>
                    <a href="#menu" onClick={handleClick('menu')}>
                        Menu
                    </a>
                    <Link to="/booking">Reservations</Link>
                    <a href="/order">Order Online</a>
                    <a href="/login">Login</a>
                </HStack>
            </HStack>
        </Box>
    );
};

export default NavigationBar;
