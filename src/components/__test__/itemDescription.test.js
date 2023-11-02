import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ItemPage from '../itemDescription';
import { AppProvider } from '../Context';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' }),
  })
);

test('ItemPage should display item details and add to cart', async () => {
  // Establecer la URL de la prueba para cargar ItemPage con el ID correcto
  const route = '/itemDescription/1';

  // Usar act para esperar a que se resuelva la solicitud asincrónica
  await act(async () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppProvider>
          <Routes>
            <Route path="/itemDescription/:id" element={<ItemPage />} />
          </Routes>
        </AppProvider>
      </MemoryRouter>
    );
  });

  // Verificar que los detalles del artículo se muestren en la página
  expect(await screen.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
  expect(await screen.findByText('$100')).toBeInTheDocument();
  expect(await screen.findByText('A stylish backpack for your laptop and other essentials.')).toBeInTheDocument();

  // Hacer clic en el botón "Add to cart"
  fireEvent.click(await screen.findByText('Add to cart'));

  // Verificar que se muestra la alerta
  expect(window.alert).toHaveBeenCalledWith('Item added to cart');
});