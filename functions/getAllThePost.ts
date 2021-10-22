import { collection, DocumentData, getDocs } from "firebase/firestore";
import { fireStore } from "../configuration/fire";
const getAllThePosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(fireStore, "filesadress"));
    var items: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      items.push(item);
    });
    return items;
  } catch (error) {
    console.log("data not recieved");
  }
};
export default getAllThePosts;
