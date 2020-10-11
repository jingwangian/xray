import React from 'react';
import { render } from '@testing-library/react';
import LogoBar from './LogoBar';

describe('LogoBar', () => {
  it('test logobar', () => {
    const { container } = render(<LogoBar />);

    expect(container.getElementsByTagName('img').length).toBe(1);
  });
});
