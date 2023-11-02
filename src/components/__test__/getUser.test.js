import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContext } from "../Context";
import UserInfo from '../getUser';

const wrapper = ({ children }) => (
  <AppContext.Provider value={{ state: { userInitials: { fnl: 'D', lnl: 'P' } } }}>
    {children}
  </AppContext.Provider>
);

test('renders user initials', async () => {
  render(<UserInfo />, { wrapper });

  const userInitials = screen.getByText('DP');
  expect(userInitials).toBeInTheDocument();
});





