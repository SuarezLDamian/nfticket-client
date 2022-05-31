import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
    return (
        <nav className="navbar bg-base-100">            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/">
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events">
                                <a>Eventos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/upload">
                                <a>Nuevo</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl">NFTicket</a>
                </Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <a>Eventos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/upload">
                            <a>Nuevo</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
               <ConnectButton label="Conectarme" accountStatus="address" chainStatus="icon"/>
            </div>
        </nav>
    )
}

export default NavBar;