/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react'
import { WindowComponent } from '../WindowComponent';

describe('WindowComponent', () => {
  test('should render Preview component', () => {
    render(<WindowComponent />);
    const previewElement = screen.getAllByTestId('preview-1');
    expect(previewElement).toBeInTheDocument()
  });
});

// test('test', () => {
//   expect(true).toBe(true)
// })