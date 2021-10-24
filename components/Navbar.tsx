import { BsUpload } from 'react-icons/bs';
import Link from "next/link"
const Navbar: React.FC = () => {
  return (
    <div>
      <div className=" navbar mb-2 bg-transparent text-black mx z-50 ">
        <div className="  md:ml-44 flex-1 px-2 mx-2">
          <Link href="/" passHref>
            <span className="text-lg font-bold">GalleryXD</span>
          </Link>
        </div>

        <div className="flex-none md:mr-44">
          <Link href="/upload" passHref>
            <button className="btn btn-square btn-ghost">
              <BsUpload />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
