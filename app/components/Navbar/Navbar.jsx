import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-neutral-content">
            <div className="navbar-start max-w-[1240px] max-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <Link href="#">Projects</Link>
                            <ul className="p-2">
                                <li><Link href="#">Data Analysis</Link></li>
                                <li><Link href="#">Software</Link></li>
                                <li><Link href="#">Dev Ops</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">About Us</Link></li>
                    </ul>
                </div>
                <Link href="#" className="btn btn-ghost text-xl">Racine14 Tech</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul className="p-2  z-50">
                                <li><Link href="#">Data Analysis</Link></li>
                                <li><Link href="#">Software</Link></li>
                                <li><Link href="#">Dev Ops</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="/aboutus">About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/login" className="btn btn-primary">Join Us</Link>
            </div>
        </div>
    )
}

export default Navbar