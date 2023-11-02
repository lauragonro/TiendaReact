import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../Context'; 
import ShowItem from '../item';

const props = {
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
};

const MockedAppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ state: { title: props.title, price: props.price, id: props.id, }, dispatch: jest.fn(), }} >
      {children}
    </AppContext.Provider>
  );
};

test('it should render ShowItem component with props', () => {
  render(
    <Router>
      <MockedAppContextProvider>
        <ShowItem {...props} />
      </MockedAppContextProvider>
    </Router>
  );

  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByText(`$${props.price}`)).toBeInTheDocument();

  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', `/itemDescription/${props.id}`);

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', props.image); 
});
