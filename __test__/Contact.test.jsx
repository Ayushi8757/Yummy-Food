import { render,screen } from '@testing-library/react';
import Contact from "../Contact";
import '@testing-library/jest-dom';

test('should load contact us component', () => {

  render(<Contact/>)
  const heading=screen.getByRole("heading");
  //assertion
  expect (heading).toBeInTheDocument();
});
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/Click/i);
  // expect(linkElement).toBeInTheDocument();

