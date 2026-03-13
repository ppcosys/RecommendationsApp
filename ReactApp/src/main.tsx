import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-calendar/dist/Calendar.css'
import './app/layout/styles.css'

import { store, StoreContext } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'

import { ColorModeProvider } from './app/theme/ColorModeContext';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <ColorModeProvider>
        <RouterProvider router={router}/>
      </ColorModeProvider>
    </StoreContext.Provider>
  </StrictMode>
)
