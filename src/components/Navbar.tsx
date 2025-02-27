import FlipLink from './ui/FlipLink';
import WEBTHREE from '../icons/WEBTHREE';
import Call from '../icons/Call';
import X from '../icons/X';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#292929]">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-[#dcdcdc] sm:w-40 w-32">
            <WEBTHREE w="100%" h="100%" /> {/* Adjust the size as needed */}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <FlipLink href="#">HOME</FlipLink>
            <FlipLink href="#">SERVICES</FlipLink>
            <FlipLink href="#">PARTNERS</FlipLink>
            <FlipLink href="#">CLIENTS</FlipLink>
            <FlipLink href="#">CONTACT</FlipLink>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex rounded-full items-center sm:gap-2 gap-1 px-1 py-1 sm:w-48 w-36 text-black bg-[#95ff00] hover:bg-[#dcdcdc] transition-colors">
              <div className="bg-black rounded-full text-[#dcdcdc] sm:w-10 sm:h-10 w-8 p-2 h-8 flex items-center justify-center">
                <Call w='100%' h='100%' />
                </div>
                <div className='text-sm sm:text-lg font-semibold'>BOOK A CALL</div>
            </button>
            <a href="#" className="text-[#95ff00] hover:text-white transition-colors">
              <X w='25' h='25' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;