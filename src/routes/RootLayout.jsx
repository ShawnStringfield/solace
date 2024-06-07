import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { ScrollRestoration } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <div className='grow'>
          <Nav />
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
      </div>
    </>
  );
}
