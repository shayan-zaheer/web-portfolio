import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            <InfinitySpin width="200" color="#FF0000" />
        </div>
    );
}

export default Loader;
