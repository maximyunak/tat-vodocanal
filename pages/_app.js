import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import Store from '@/Context/store';
import { createContext } from 'react';

const store = new Store();

export const Context = createContext({
  store,
});

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const bool = pathname === '/login' || pathname === '/home';

  if (bool) {
    return (
      <Context.Provider value={{ store }}>
        <Component {...pageProps} />
      </Context.Provider>
    );
  } else {
    return (
      <Context.Provider value={{ store }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    );
  }
}
