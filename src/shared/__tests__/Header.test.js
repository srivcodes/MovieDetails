import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from '@components/Header/Header';

test('renders the heading', () => {
  render(<Header />);
});
