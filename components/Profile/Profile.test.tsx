import Profile from './Profile';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Profile Component test', () => {
  test('Profile, given click "hide details" button, shows "display details" button', () => {
    render(
      <Profile
        name='John Doe'
        title='Team Lead'
        details='This is my 5th year and I love helping others'
      />
    );

    const hideDetailsBtn = screen.getByRole('button', {
      name: /hide details/i,
    });

    fireEvent.click(hideDetailsBtn);
    const displayDetailsBtn = screen.getByRole('button', {
      name: /display details/i,
    });

    expect(displayDetailsBtn).toBeTruthy();
  });
});
