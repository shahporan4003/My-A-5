import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        // parent nav
        <nav className=' '>
            <div className='  bg-white container mx-auto flex justify-between items-center h-14 w-auto border-b-4 border-b-fuchsia-50 ...'>
                {/* child nav left */}
                    <div >
                    <img className='h-6 w-auto' src={logo} alt="" />
                    </div>
{/* child nav center */}
            <div>
              <ul className='flex gap-6 items-center text-slate-600'>
                <li className='text-pink-600'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contract</li>
              </ul>
            </div>
            {/* child nav right */}
            <div className='flex items-center gap-4'>
                <button className="text-3 text-gray-700  cursor-pointer">Sign In</button>
                <button className="rounded-3xl bg-pink-600 px-2 text-2 text-white shadow-md  cursor-pointer">Sign Up</button>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;