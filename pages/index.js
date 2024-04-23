import { Inter } from 'next/font/google';
// import Login from './login'
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return null;
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
