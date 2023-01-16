import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from '@components/Header/Header';

test('renders the heading', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toHaveTextContent(/movie details/i);
});

test('renders the wishlist button', () => {
  const { container } = render(<Header />);
  expect(container.getElementsByClassName('wishlist-button').length).toBe(1);
});

test('renders the wishlist container', async () => {
  const { container } = render(<Header />);
  await userEvent.click(screen.getByTestId('wishlist-button'));
  expect(container.getElementsByClassName('drawer-container').length).toBe(1);
});
