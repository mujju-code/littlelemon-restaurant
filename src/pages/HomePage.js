import { Box, Container } from '@chakra-ui/react';

import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <Box textAlign="center" py={8}>
            <Container maxW="container.lg">
                <Nav />
                <HeroSection />
                <Highlights />
                <Testimonials />
                <About />
                <Footer />
            </Container>
        </Box>
    );
};

export default HomePage;
