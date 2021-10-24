import create from "zustand";
interface proptypes {
  selectedFileName: any;
  setSelectedFileName: any;
  imageReturnUrl: string;
  setImageReturnUrl: any;
  toggle: any;
  setToggle: any;
}
const useStore = create<proptypes>((set) => ({
  selectedFileName: {},
  setSelectedFileName: (selectedFileName) =>
    set((state) => ({
      selectedFileName,
    })),
  imageReturnUrl: "",
  setImageReturnUrl: (imageReturnUrl) =>
    set((state) => ({
      imageReturnUrl,
    })),
  toggle: false,
  setToggle: (toggle) =>
    set((state) => ({
      toggle,
    })),
}));
export default useStore;
