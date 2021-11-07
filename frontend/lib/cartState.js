import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
   const [cartOpen, setCartOpen] = useState(false);

   function toggleCart() {
      setCartOpen(!cartOpen);
   }

   function closeCart() {
      setCartOpen(false);
   }

   function openCart() {
      setCartOpen(true);
   }

   return (
      <LocalStateProvider
         value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}>
         {children}
      </LocalStateProvider>
   );
}

// make custom hook for accesing the cart local state

function useCart() {
   // we use a consumer here to acess the local state
   const all = useContext(LocalStateContext);
   return all;
}

export { CartStateProvider, useCart };
