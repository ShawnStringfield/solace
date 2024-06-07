import { navLinks } from '../config/navLinks';
import { Link } from 'react-router-dom';
import { RxTextAlignRight, RxCross1 } from 'react-icons/rx';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/shadcn/ui/alert-dialog';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/shadcn/ui/navigation-menu';

export const Nav = () => {
  return (
    <>
      <div className='nav container flex justify-between items-center mt-8 mb-16'>
        <div>
          <Link to='/'>
            <h1 className='text-xl'>Logo</h1>
          </Link>
        </div>
        <div className='flex justify-end sm:hidden w-2/4'>
          <AlertDialog>
            <AlertDialogTrigger>
              <RxTextAlignRight size='28px' />
            </AlertDialogTrigger>
            <AlertDialogContent className='container top-32 w-[400px] rounded-md'>
              <div className='flex'>
                <AlertDialogHeader>
                  <AlertDialogTitle className='absolute top-0 right-0'>
                    <AlertDialogCancel className='focus-visible:ring-transparent p-0 mr-4'>
                      <RxCross1 size='18px' />
                    </AlertDialogCancel>
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex flex-col'>
                  {navLinks.map((item, index) => (
                    <Link to={item.href} key={index}>
                      <AlertDialogAction className='text-lg'>{item.name}</AlertDialogAction>
                    </Link>
                  ))}
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className='justify-end hidden sm:flex'>
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item.href}>
                    <span className={`${navigationMenuTriggerStyle()}`}>{item.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
};
