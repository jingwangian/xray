import React from 'react';
import { render } from '@testing-library/react';
import ImageUpload from './ImageUpload';

describe('Test ImageUpload Component', () => {
  it('file not uploaded', () => {
    const mockCallback = jest.fn();
    const { container } = render(<ImageUpload />);

    // The mock function is called zero
    expect(mockCallback.mock.calls.length).toBe(0);
    expect(container.getElementsByTagName('button').length).toBe(1);
    expect(container.getElementsByTagName('img').length).toBe(0);
  });
});
