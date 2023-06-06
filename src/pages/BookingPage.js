import { Box, Container } from '@chakra-ui/react';
import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { redirect } from 'react-router-dom';

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Update available times based on the selected date
            return ['17:00', '18:00', '19:00', '20:00', '21:00'];
        default:
            return state;
    }
};
const initializeTimes = () => {
    // Initialize the available times state
    return fetchAPI(new Date());
};

const submitForm = async (formData) => {
    try {
        const response = await submitAPI(formData);
        if (response === true) {
            redirect('/confirmed'); // Use the navigate function to navigate to the booking confirmation page
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

const BookingPage = () => {
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        availableTimesReducer,
        [],
        initializeTimes
    );

    const updateTimes = async (date) => {
        // Update available times based on the selected date
        // dispatchAvailableTimes({ type: 'UPDATE_TIMES', date });
        try {
            const times = await fetchAPI(date);
            dispatchAvailableTimes({ type: 'UPDATE_TIMES', times });
        } catch (e) {
            console.error('Error fetching available times');
        }
    };

    return (
        <Box textAlign="center" py={8}>
            <Container maxW="container.lg">
                <BookingForm
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                    submitForm={submitForm}
                />
            </Container>
        </Box>
    );
};

export default BookingPage;
