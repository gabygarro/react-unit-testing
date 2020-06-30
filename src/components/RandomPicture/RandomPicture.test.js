import React from 'react';
import { render } from '@testing-library/react';
import RandomPicture from './RandomPicture';

const base64Picture = 'data:;base64,fake_base64_source';

describe('Random Picture', () => {
  it('renders picture correctly', () => {
    const { getByTestId } = render(<RandomPicture loading={false} picture={base64Picture} />);
    expect(getByTestId('picture').src).toBe(base64Picture);
  });

  it('renders only loading indicator while loading', () => {
    const { getByTestId, queryByTestId } = render(<RandomPicture loading={true} picture={base64Picture} />);
    expect(queryByTestId('picture')).toBeNull();
    expect(getByTestId('loading')).toBeTruthy();
  });
});