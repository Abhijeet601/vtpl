import { render, screen } from '@testing-library/react';
import WelcomeMessage from '../WelcomeMessage';

describe('WelcomeMessage', () => {
  test('renders welcome message', () => {
    render(<WelcomeMessage />);
    const welcomeElement = screen.getByText(/Hello there! I'm your AI coding companion/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
