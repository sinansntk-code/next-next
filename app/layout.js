"use client";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Footer from './components/Footer';


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider store={store}>
         <Header/>
          <main>{children}</main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}