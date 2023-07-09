import React from "react";

const ButtomPrimary = ({ text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="w-[132px] h-[42px] bg-[#EA580C] rounded-md">
                <p>{text}</p>
            </button>
        </div>
    )
}

export default ButtomPrimary;