import { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Container,
    Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setFormValid] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    // const navigate = useNavigate();

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        updateTimes(selectedDate);
        setDate(selectedDate);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // if (isFormValid) {
        // navigate('/confirmed');
        // }
    };

    // Perform form validation on each state change
    useEffect(() => {
        const isValid =
            date !== '' &&
            time !== '' &&
            guests !== '' &&
            guests >= 1 &&
            guests <= 10 &&
            occasion !== '';

        setFormValid(isValid);
    }, [date, time, guests, occasion]);

    return (
        <Container maxW="container.lg" py={10}>
            <Heading as="h2" size="lg" mb={6}>
                Book a Table
            </Heading>
            <Box as="form" display="grid" gap="20px">
                <FormControl>
                    <FormLabel htmlFor="res-date">Choose date</FormLabel>
                    <Input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="res-time">Choose time</FormLabel>
                    <Select
                        id="res-time"
                        value={time}
                        onChange={handleTimeChange}
                        required
                    >
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <Input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={handleGuestsChange}
                        min={1}
                        max={10}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        id="occasion"
                        value={occasion}
                        onChange={handleOccasionChange}
                        required
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Business Meeting">Business Meeting</option>
                        <option value="Other">Other</option>
                    </Select>
                </FormControl>
                {/* {isSubmitted && !isFormValid && (
          <Box color="red">Please fill in all required fields correctly.</Box>
        )} */}
                <Button
                    type="submit"
                    colorScheme="blue"
                    onClick={handleSubmit}
                // disabled={!isFormValid}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default BookingForm;
