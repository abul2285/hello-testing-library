import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';

import Login from './Login';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Login using fireEvent', () => {
  test('should display user name that user have enter in input field', () => {
    render(<Login />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    fireEvent.change(input, { target: { value: email } });

    expect(screen.getByText(`Your name is: ${email}`)).toBeInTheDocument();
  });
});

describe('RestPassword using userEvent', () => {
  test('should not display user name that user have enter in input field', async () => {
    render(<Login />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    await userEvent.type(input, email);

    expect(screen.getByText(`Your name is:`)).toBeInTheDocument();
    expect(
      screen.queryByText(`Your name is: ${email}`)
    ).not.toBeInTheDocument();
  });
});
