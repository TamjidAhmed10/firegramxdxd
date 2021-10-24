import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { fireStorage, fireStore } from "../configuration/fire";

import useStore from "../zust/zusfig";
const UploadForm = () => {
  const {
    selectedFileName,
    setSelectedFileName,
    imageReturnUrl,
    setImageReturnUrl,
  } = useStore();
  const [error, setError] = useState("");
  useEffect(() => {
    const writeFile = async () => {
      if (imageReturnUrl) {
        console.log("imageReturnUrl", imageReturnUrl);
        try {
          let ms = new Date();
          let data: Object = {};
          data["imageAdress"] = imageReturnUrl;
          data["timestrap"] = ms.toString();
          await setDoc(doc(fireStore, "filesadress", ms.toString()), data);
          console.log("writeFile");
        } catch (error) {
          console.log("there was a error", error);
        }
      }
    };
    writeFile();
  }, [imageReturnUrl]);

  const handleButtonClick = () => {
    if (selectedFileName) {
      const storageRef = ref(fireStorage, "images/" + selectedFileName["name"]);
      const uploadTask = uploadBytesResumable(storageRef, selectedFileName);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageReturnUrl(downloadURL);
          });
        }
      );
    }
  };
  const handleChange = (e: any) => {
    if (
      (e.target.files[0] && e.target.files[0].type === "image/jpeg") ||
      e.target.files[0].type === "image/png"
    ) {
      setSelectedFileName(e.target.files[0]);
      setError("");
    } else {
      setError("Please select a valid image file jpeg/png");
      setSelectedFileName("");
    }
  };
  return (
    <div className=" flex h-screen">
      <div className="mx-auto mt-48 max-w-md">
        <div className="">
          <input type="file" onChange={handleChange} />
          <button
            onClick={handleButtonClick}
            className="btn btn-md btn-secondary"
          >
            upload
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
