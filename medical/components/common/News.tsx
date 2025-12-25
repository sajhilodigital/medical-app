import React from 'react';

function News() {
  return ( 
    <div className='py-18'>
        <div className="text-center mb-12 py-2">
        <h1 className="text-[#159EEC] tracking-widest uppercase font-semibold">
          Better information, Better health
        </h1>
        <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">
          News
        </h2>
      </div>
      <div className='bg-gray-100  grid grid-cols-2 gap-8 max-w-7xl mx-auto'>
        <div className="py-16">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3 w-full">
              <img
                src="/images/news.png" alt="News" className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 w-full p-6 gap-2 flex flex-col justify-between">
              <div>
                <p className="text-[#159EEC] text-sm font-medium mb-2">
                  Monday 05, September 2021 | By Author
                </p>
                <h2 className="text-[#1F2B6C] text-2xl font-semibold leading-snug">
                  This Article’s Title goes Here, but not too long.
                </h2>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#159EEC]">
                  <img src="/images/eye.png" alt="eye" /> <span className="text-gray-700">68</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <img src="images/heart.png" alt="heart" /> <span className="text-gray-700">86</span>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="py-16">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3 w-full">
              <img
                src="/images/news.png" alt="News" className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 w-full p-6 gap-2 flex flex-col justify-between">
              <div>
                <p className="text-[#159EEC] text-sm font-medium mb-2">
                  Monday 05, September 2021 | By Author
                </p>
                <h2 className="text-[#1F2B6C] text-2xl font-semibold leading-snug">
                  This Article’s Title goes Here, but not too long.
                </h2>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#159EEC]">
                  <img src="/images/eye.png" alt="eye" /> <span className="text-gray-700">68</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <img src="images/heart.png" alt="heart" />  <span className="text-gray-700">86</span>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="py-16">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3 w-full">
              <img
                src="/images/news.png" alt="News" className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 w-full p-6 gap-2 flex flex-col justify-between">
              <div>
                <p className="text-[#159EEC] text-sm font-medium mb-2">
                  Monday 05, September 2021 | By Author
                </p>
                <h2 className="text-[#1F2B6C] text-2xl font-semibold leading-snug">
                  This Article’s Title goes Here, but not too long.
                </h2>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#159EEC]">
                  <img src="/images/eye.png" alt="eye" /> <span className="text-gray-700">68</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <img src="images/heart.png" alt="heart" />  <span className="text-gray-700">86</span>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="py-16">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3 w-full">
              <img
                src="/images/news.png" alt="News" className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 w-full p-6 gap-2 flex flex-col justify-between">
              <div>
                <p className="text-[#159EEC] text-sm font-medium mb-2">
                  Monday 05, September 2021 | By Author
                </p>
                <h2 className="text-[#1F2B6C] text-2xl font-semibold leading-snug">
                  This Article’s Title goes Here, but not too long.
                </h2>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#159EEC]">
                  <img src="/images/eye.png" alt="eye" /> <span className="text-gray-700">68</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <img src="images/heart.png" alt="heart" />  <span className="text-gray-700">86</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
