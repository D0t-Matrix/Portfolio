import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {AppProps} from './utils/AppProps';

test('renders learn react link', () => {
  const { getByText } = render(<App pages={AppProps.pages} brand={AppProps.brand} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
