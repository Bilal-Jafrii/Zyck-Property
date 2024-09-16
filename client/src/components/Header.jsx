import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logo from '/logo.png'
import {
  Badge,
  Drawer,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  ModalClose,
} from "@mui/joy";
import { MdOutlineAddHome } from 'react-icons/md';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };
  const handleMouseEnter1 = () => {
    setIsModalVisible1(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };
  const handleMouseLeave1 = () => {
    setIsModalVisible1(false);
  };
  const openDrawer = () => {
    setOpen("success");
    
  };

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='navbar-gradient sticky top-0 shadow-md z-50'>
      <div>
      <div className='flex justify-evenly items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <img src={logo} width={120} height={60} alt="logo" />
        
        </Link>
       
        <ul className='flex gap-4 lg:gap-6 lg:mx-[250px] items-center'>
          <Link to={'/'}>
            <li className='hidden sm:inline hover:gradient-text hover:underline text-white'>
             Home
            </li>
          </Link>
          <div className='relative'>
      <li
        className='hidden cursor-pointer sm:inline hover:gradient-text hover:underline text-white'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Listings
      </li>

      {/* Modal */}
      {isModalVisible && (
        <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className='absolute top-6 left-0 bg-white p-4 rounded shadow-lg'>
          <Link to={'/search?offer=true'}> <li className="font-semibold text-xl">Featured</li></Link>
          <Link to={'/search?type=rent'}> <li className="font-semibold text-xl">Rent</li></Link>
          <Link to={'/search?type=sale'}> <li className="font-semibold text-xl">Sale</li></Link>
          
        </div>
      )}
    </div>
          <div className='relative'>
      <li
        className='hidden cursor-pointer sm:inline hover:gradient-text hover:underline text-white'
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        Pages
      </li>

      {/* Modal */}
      {isModalVisible1 && (
        <div onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1} className='absolute py-4 px-8 top-6 left-0 bg-white  rounded shadow-lg'>
          <Link to={'/contact-form'}> <li className="font-semibold text-xl">Contact us</li></Link>
          <Link to={'/faqs'}> <li className="font-semibold text-xl">FAQs</li></Link>
          <Link to={'/terms'}> <li className="font-semibold text-xl">Terms & - Conditions</li></Link>
          <Link to={'/about'}> <li className="font-semibold text-xl">About</li></Link>
          
        </div>
      )}
    </div>
          
        
         
        </ul>
        <ul className='flex items-center gap-5'>
        <button className='font-small  hidden md:flex text-white p-[9px]  border rounded-xl'>
          {currentUser ? (
            <Link  className='flex items-center md:w-28 gap-2' to='/create-listing'><span><MdOutlineAddHome size={20}/></span>Add Listing</Link>
            ) : (
              <Link className='flex items-center md:w-28 gap-2 ' to='/sign-in'> <span><MdOutlineAddHome size={20}/></span>Add </Link>
            )}
          </button>
          <button>
          <Badge color="" overlap="circular" badgeContent={1} size='sm' variant="dot">

            <div className="border-2 p-2 rounded-full"><span>
            
            <FaRegHeart color="white" size={20}/></span>
            </div>
            </Badge>
            </button>
        <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-9 w-9 mr-5 md:mr-0 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' hover:gradient-text hover:underline text-white mr-6 md:mr-0 w-full '> <div className="border-2 p-2 rounded-full"><CgProfile size={22} /></div></li>
            )}
          </Link>

        </ul>

        {/* drawer */}
        <div className="block md:hidden">
                <button
                  onClick={openDrawer}
                  type="button"
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Drawer  */}
                {open === "success" && (
                  <>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                      <ModalClose />
                      <div className="flex flex-col justify-between h-screen bg-white border-e">
                        <div className="">
                          <Link to='/'open={open} onClick={() => setOpen(false)} ><img
                            src={logo}
                            alt="Logo"
                            width={100}
                            className="mx-5"
                          /></Link>

                          <ul  className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                           

                         
          <Link to={'/search?type=sale'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
             Buy
            </li>
          </Link>
          <Link to={'/search?type=rent'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
              Rent
            </li>
          </Link>
          <Link to={'/search?offer=true'} onClick={() => setOpen(false)}>
            <li className=' text-slate-700 hover:underline hover:text-green-500'>
             Offers
            </li>
          </Link>
          
          <button onClick={() => setOpen(false)} className='button button-gradient  text-white  p-2 rounded-md hover:rounded-full hover:shadow-[#000080] hover:border hover:border-black hover:shadow-2xl'>
          {currentUser ? (
            <Link to='/create-listing'>Post AD</Link>
            ) : (
              <Link to='/sign-in'>Post AD</Link>
            )}
          </button>
                          </ul>
                        </div>

                        
                      </div>
                    </Drawer>
                  </>
                )}
              </div>
      </div>
      </div>
    </header>
  );
}
