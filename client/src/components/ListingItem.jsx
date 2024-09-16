import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBath, FaBed, FaCity, FaRulerCombined } from 'react-icons/fa';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
      
       <div className=' relative  gap-4'>
       <p className='absolute gradient w-full max-w-[60px] text-white text-center m-2 rounded-md'>
                {listing.type === 'rent' ? 'Rent' : 'Sale'}
              </p>
              {listing.offer && (
                <p className='absolute bg-[#000080] w-full max-w-[85px] text-white text-center mt-2 ml-20 rounded-md'>
                Featured
                </p>
              )} 
               
         <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        /></div>
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            Rs
            {/* {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')} */}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='border border-slate-400'></div>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs flex items-center gap-1'>
              <span><FaBed size={20} color='green'/></span>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs flex items-center gap-1'>
            <span><FaBath size={18} color='green'/></span>
             {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
            <div className='font-bold text-xs flex items-center gap-1'>
            <span><FaRulerCombined size={18} color='green'/></span>
              {listing.area === undefined ? '0' : `${listing.area}`} sq.ft
            </div>
            <div className='font-bold text-xs flex items-center gap-1'>
            <span><FaCity size={18} color='green'/></span>
              {listing.city} 
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
