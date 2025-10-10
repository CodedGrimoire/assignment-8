import React from "react";

const Spinner = () => (
  <div className="flex justify-center items-center w-full h-[200px] align-center">
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #e5e7eb", // light gray
        borderTop: "5px solid #3b82f6", // blue top
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Spinner;