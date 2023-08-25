/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import { Preview } from '../Preview'

test('should render Preview component', () => {
  render(<Preview />);
  const previewElement = screen.getAllByTestId('preview-1');
  expect(previewElement).toBeInTheDocument();
});