/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { BsUpload } from "react-icons/bs";
import Link from "next/link";
const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className=" navbar mb-2 bg-transparent text-black  z-50 cont">
        <div className="  md:ml-44 flex-1 px-2 mx-2  cursor-pointer">
          <img
            src="/sun.png"
            alt=""
            className="w-6 h-6 mr-1"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          />
          <span
            className="text-lg font-bold "
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            GalleryXD
          </span>
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
