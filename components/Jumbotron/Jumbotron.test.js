import { screen, render } from '@testing-library/react';
import Jumbotron from './Jumbotron';

it('search heading component by role', () => {
  render(<Jumbotron />);

  const jumbotron = screen.getByRole('heading', {
    name: /welcome to our site!/i,
  });

  expect(jumbotron).toBeInTheDocument();
});

it('search dom element by text', () => {
  render(<Jumbotron />);

  const jumbotron = screen.getByText(/welcome to our site!/i);

  expect(jumbotron).toBeInTheDocument();
});
