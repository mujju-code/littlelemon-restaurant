import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const ConfirmedBookingPage = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/');
    };
    return (
        <Box textAlign="center" py={8}>
            <h1>Booking Confirmed!</h1>
            <p>Your booking has been successfully confirmed.</p>
            <Button color="blue" onClick={clickHandler}>
                Back to Home
            </Button>
        </Box>
    );
};

export default ConfirmedBookingPage;
