import React from 'react';
import { render, screen } from '@testing-library/react';
import Head from '../top';
import GetHome from '../home';
import GetCart from '../cart';
import UserInfo from '../getUser';

test('Renderiza Head correctamente', () => {
  const { getByTestId } = render(<Head />);
 
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
 
  const homeComponent = getByTestId('home-component');
  expect(homeComponent).toBeInTheDocument();
 
  const cartComponent = getByTestId('cart-component');
  expect(cartComponent).toBeInTheDocument();
 
  const userInfoComponent = getByTestId('user-info-component');
  expect(userInfoComponent).toBeInTheDocument();

});
