import SignIn from '@/pages/signin';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Sign In', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it('Sign in, given credentials, returns enabled submit button', () => {
    render(<SignIn />);
    const username = screen.getByRole('textbox', { name: /username/i });
    const password = screen.getByLabelText(/password/i);
    const rememberMe = screen.getByRole('checkbox');
    const loginBtn = screen.getByRole('button', { name: /login/i });
    const fakeData = {
      username: 'test user',
      password: '123password',
    };
    // expect(loginBtn.hasAttribute('disable')).toBe(true);
    // expect(loginBtn).not.toBeDisabled();
    fireEvent.change(username, { target: { value: fakeData.username } });
    fireEvent.change(password, { target: { value: fakeData.password } });
    fireEvent.click(rememberMe);
    expect(loginBtn).not.toBeDisabled();
    // expect(screen.getByTestId('form')).toHaveFormValues({
    //   username: fakeData.username,
    //   password: fakeData.password,
    //   rememberMe: true,
    // });
  });
});
