import React from 'react'

function Props({ myName , newObject , newMyObj , btnText="Visit Me" }) {
    console.log("Checking Purpose" , newObject , myName , btnText , newMyObj);

  return (
    <div>
        <div class="bg-blue-300 rounded-2xl shadow-md p-6 max-w-sm w-full ml-120">
 
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
      alt="Nature"
      class="w-full h-48 object-cover rounded-xl mb-4"
    />
 
    <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide">Travel</span>
 
    <h2 class="text-xl font-bold text-gray-800 mt-1 mb-2">Beautiful Mountain View</h2>
 
    <p class="text-gray-500 text-sm leading-relaxed">
      Explore the breathtaking landscapes of nature. A perfect getaway from the busy city life into the calm of the mountains.
    </p>
 
    <div class="flex items-center justify-between mt-5">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">AK</div>
        <span class="text-sm text-gray-600">Talha Makhdoom</span>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
        {btnText}
        {/* agar wavlue milli to theek nahi to ye wali */}
      </button>
    </div>
 
  </div>
    </div>
  )
}

export default Props