const ImagesLists = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div>
        <h1>Images</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((value, i) => (
            <div className="bordered shadow-md hover:shadow-2xl" key={i}>
              <figure>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={value.imageAdress}
                  alt="blog"
                  className="object-cover h-64 w-full"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesLists;
