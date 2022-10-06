import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Renders halaman home dengan benar', () => {
  render(<App />);
  
  // mencari text terbaru
  const title = screen.getByText(/Why do we need Test ?/i);
  expect(title).toBeInTheDocument();

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Users List')

  // klik tombol Users List
  fireEvent.click(btn)
  // mencari tombol tertentu
  // pada halaman yang muncul karena klik tombol
  // pastikan button kita memiliki role="button"
  const btn2 = screen.getByRole('button')
  expect(btn2).toBeInTheDocument()
  expect(btn2).toHaveTextContent('Back to Home')
});
