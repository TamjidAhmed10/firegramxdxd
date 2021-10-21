import create from "zustand";

interface proptypes{
    selectedFileName: any,
    setSelectedFileName:any
}
const useStore = create<proptypes>((set) => ({
    selectedFileName: {},
    setSelectedFileName: (selectedFileName) => set((state) => ({
        selectedFileName
    }))
}));
export default useStore;