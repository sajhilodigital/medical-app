import React from 'react';


function About() {
  return (
    <div className='py-16'>
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

        <div className="md:w-1/2 w-full ">
          <img src="/images/aboutd.png" alt="Doctor" className="w-full h-full object-cover" />

        </div>

        <div className="md:w-1/2 w-111 h-34 px-5">
          <h3 className="text-[#159EEC] text-lg font-semibold mb-2">WELCOME TO HOSPITAL NAME</h3>
          <h1 className="text-[#1F2B6C] py-2 text-4xl font-bold leading-snug">Best Care for Your</h1>
          <h1 className="text-[#1F2B6C] text-4xl font-bold mb-6">Good Health</h1>

          <ul className="px-5 py-4 grid grid-cols-2 gap-4">
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>A passion for Healing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>5-Star Care</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>All our best</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>Believe in us</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>Always Caring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mt-2"></span>
              <span>A Legacy of Excellence</span>
            </li>

          </ul>
          <p className='py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos animi, voluptatum unde aliquid recusandae dolores laborum quisquam pariatur, deserunt ipsum quos omnis debitis incidunt eaque amet praesentium? Soluta, veniam quos.</p>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum odit laboriosam error soluta perferendis ad reiciendis odio, inventore asperiores vero ipsum at nam, molestiae molestias pariatur quam hic eligendi!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
