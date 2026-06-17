import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import {
  FaHome,
  FaHistory,
 
  // FaCreditCard,
  FaCog,
  FaCreditCard,
 
} from "react-icons/fa";


const BottomNav2: React.FC = () => {
 
 
  const location = useLocation();
const [error, setError] = useState(false);


 



  return (
    <>
      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md z-50">
        <div className="flex justify-around items-center py-2">
          <Link to="/dashboard" className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <FaHome className={`text-xl ${location.pathname === "/dashboard" && "text-blue-600"}`} />
            <span>Home</span>
          </Link>
          <Link to="/history" className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <FaHistory className={`text-xl ${location.pathname === "/history" && "text-blue-600"}`} />
            <span>History</span>
          </Link>
        
         <button
  onClick={() => setError(true)}
  className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600"
>
  <FaCreditCard className="text-xl" />
  <span>Withdraw</span>
</button>

{error && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
    <h2 className="text-lg font-semibold text-red-600">
      Contact Your Financial Advisor
    </h2>

    <p className="text-gray-600 mt-2">
      Assistance Required
    </p>

    <p className="text-gray-600 mt-2 text-sm">
      To proceed with your request, please contact your assigned financial
      advisor for further assistance and guidance.
    </p>

    <a
      href="https://wa.me/+19012648778?text=Hello,%20I%20need%20assistance%20with%20my%20account"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="w-full mb-6 mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Contact Financial Advisor
      </button>
    </a>

    <div className="mt-4">
      <button
        onClick={() => setError(false)}
        className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
      >
        Close
      </button>
    </div>
  </div>
</div>
)}
          <Link to="/settings" className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <FaCog className={`text-xl ${location.pathname === "/settings" && "text-blue-600"}`} />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNav2;
