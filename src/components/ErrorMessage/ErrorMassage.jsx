import { Toaster } from "react-hot-toast";

const ErrorMassage = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toasterId="default"
      toastOptions={{
        // Define default options
        className: "",
        duration: 2000,
        removeDelay: 500,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 2000,
          iconTheme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
};

export default ErrorMassage;
