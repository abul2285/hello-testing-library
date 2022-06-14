import { fireEvent, render, screen } from '@testing-library/react';
import Vote from './Vote';

test('increases total likes by one', () => {
  render(<Vote totalGlobalLikes={10} />);
  expect(screen.getByText(/10/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /thumbs up/i }));
  expect(screen.getByText(11)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /thumbs up/i })).toHaveStyle(
    'background: green'
  );
});
