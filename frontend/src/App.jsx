import React, { useState } from "react";

const App = () => {
  const [network, setNetwork] = useState("");
  const [packageOption, setPackageOption] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ network, packageOption, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Welcome Section */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Welcome KENNETH!
        </h2>
        <p className="text-gray-600 mb-4">
          We dearly welcome <strong>you</strong> to this platform. We will be
          glad to help anytime.
        </p>
        <img
          src="/undraw_Hello_re_3evm.png" // Placeholder image URL. Replace with the actual image.
          alt="User Illustration"
          className="w-400 h-40 mb-4"
        />
        {/* Wallet and Transactions Section */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-500">Wallet</p>
            <p className="text-2xl font-semibold">₦1,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-500">Transactions</p>
            <p className="text-2xl font-semibold">1</p>
          </div>
        </div>
      </div>

      {/* Subscription Form */}
      <div className="flex justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Subscription
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            You may not receive SMS notification, kindly dial{" "}
            <strong>*323*4#</strong> to get your balance.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="network"
                className="block text-sm font-medium text-gray-700"
              >
                Network
              </label>
              <select
                id="network"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              >
                <option value="" disabled>
                  Choose Network
                </option>
                <option value="mtn">MTN</option>
                <option value="airtel">Airtel</option>
                <option value="glo">GLO</option>
                <option value="9mobile">9Mobile</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="package"
                className="block text-sm font-medium text-gray-700"
              >
                Package
              </label>
              <select
                id="package"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={packageOption}
                onChange={(e) => setPackageOption(e.target.value)}
              >
                <option value="" disabled>
                  Choose Package
                </option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
