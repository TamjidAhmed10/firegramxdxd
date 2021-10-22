import Image from "next/image";
const ImagesLists = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div>
        <h1>Images</h1>
        <div className="grid grid-cols-3 gap-3">
          {posts.map((value, i) => (
            <div className="bordered shadow-md hover:shadow-2xl" key={i}>
              <figure>
                <div className="h-64 w-full relative">
                  <Image
                    src={value.imageAdress}
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="" // just an example
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesLists;
