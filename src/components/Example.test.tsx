import React from 'react';
import { Example } from './Example';
import { render, screen } from '@testing-library/react';

describe('Simple Test', () => {
  test('It should test', () => {
    render(<Example />);

    const value = screen.findByTitle('test').then((ele) => {
      expect(ele.innerText).toBe(6);
    });
  });
});
