import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "20px auto",
};
const Loader = ({ loading }) => {
  return (
    <ClipLoader
      color="#026ae0"
      loading={loading}
      cssOverride={override}
      size={80}
      aria-label="Loading Spinner"
    />
  );
};
export default Loader;
