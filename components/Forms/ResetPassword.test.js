import { render, screen, fireEvent } from '@testing-library/react';

import ResetPassword from './ResetPassword';
import userEvent from '@testing-library/user-event';

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

describe('ResetPassword using fireEvent', () => {
  test('should change value based on user input', () => {
    render(<ResetPassword />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    fireEvent.change(input, { target: { value: email } });

    expect(input).toHaveValue(email);
  });

  test('should change value based on user input', () => {
    render(<ResetPassword disable={true} />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    fireEvent.change(input, { target: { value: email } });

    expect(input).toHaveValue(email);
  });
});

describe('ResetPassword using userEvent', () => {
  test('should not change value based on user input', () => {
    render(<ResetPassword />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    userEvent.type(input, email);

    expect(input).toHaveValue(email);
  });

  test('should change value based on user input', () => {
    render(<ResetPassword disable={true} />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    userEvent.type(input, email);

    expect(input).not.toHaveValue(email);
  });
});
