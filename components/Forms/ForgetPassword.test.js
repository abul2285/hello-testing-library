import { render, screen, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import ForgetPassword from './ForgetPassword';

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

describe('RestPassword using fireEvent', () => {
  test('should change value based on user input', () => {
    render(<ForgetPassword />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    fireEvent.change(input, { target: { value: email } });

    expect(input).toHaveValue(email);
  });

  test('should change value based on user input', () => {
    render(<ForgetPassword />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    fireEvent.change(input, { target: { value: email } });

    expect(input).toHaveValue(email);
  });
});

describe('ForgetPassword using userEvent', () => {
  test('should not change value based on user input', () => {
    render(<ForgetPassword />);
    const email = 'abul@dorik.com';

    const input = screen.getByPlaceholderText(/enter your email here/i);

    userEvent.type(input, email);

    expect(input).not.toHaveValue(email);
  });
});
