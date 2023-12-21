import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

    <RouterProvider router={router}/>
    <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#40D861",
                padding: "16px",
                color: "white",
              },
              iconTheme: {
                primary: 'white',
                secondary: '#40D861',
              },
            },

            error: {
              style: {
                background: "#ff4f38",
                color: "white",
              },

            },
          }}
        />
    </AuthProvider>
  </React.StrictMode>,
)
