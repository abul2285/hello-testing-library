import { render, screen } from '@testing-library/react';
import Travel from './Travel';

it('Travel component snapshot test', () => {
  const { container } = render(<Travel />);

  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="card text-center m-1"
    style="width: 18rem;"
  >
    <i
      class="material-icons"
      style="font-size: 4rem;"
    >
      airplanemode_active
    </i>
    <h4>
      Travel Anywhere
    </h4>
    <p
      class="p-1"
    >
      Our premium package allows you to take exotic trips anywhere at the cheapest prices!
    </p>
  </div>
</div>
`);
});

it('displays the entire travel component', () => {
  render(<Travel />);
  screen.debug();
});

it('displays the header and paragraph text', () => {
  render(<Travel />);
  const header = screen.getByRole('heading', { name: /travel anywhere/i });
  screen.debug(header);
});
