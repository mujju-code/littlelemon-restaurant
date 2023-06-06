import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  test('renders the form with all fields', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
