// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Link from '../Link/Link';
// Hero Incons import link
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {
          "id": 1,
          "name": "Home",
          "path": "/home"
        },
        {
          "id": 2,
          "name": "About",
          "path": "/about"
        },
        {
          "id": 3,
          "name": "Services",
          "path": "/services"
        },
        {
          "id": 4,
          "name": "Contact",
          "path": "/contact"
        },
        {
          "id": 5,
          "name": "Products",
          "path": "/products"
        },
      ];
      
    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                    open === true ? 
                    <XMarkIcon className="h-6 w-6 text-purple-500"/>
                    :<Bars3Icon className="h-6 w-6 text-purple-500"/>
                
                }
                </span>
                
                
            </div>
              <ul className={`md:flex absolute md:static duration-500 pl-8 pb-4 py-2 bg-purple-400 ${open ? 'top-6': '-top-36'}`}>
                {
                    // eslint-disable-next-line react/jsx-key
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                    ></Link>)
                }
              </ul>
              {/* <BeakerIcon className="h-6 w-6 text-purple-500" /> */}
        </nav>
    );
};

export default Navbar;