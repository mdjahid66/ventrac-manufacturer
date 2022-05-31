import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-primary">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
          >
            Ventrac, the largest Manufacturer
            <br className="hidden md:block" />
            Company{" "}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-slate-200" />
              <span className="relative text-teal-900 font-extrabold text-3xl">
                of tools
              </span>
            </span>
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="900"
            className="mb-6 text-base text-indigo-100 md:text-lg"
          >
            The experience gained on the market, the quality assured, the
            reliability and competitiveness of the products led to a rapid
            growth of the Company on the International market.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="800"
            className="btn "
          >
            Get Started
          </button>
          <p
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16"
          >
            Today Ventrac can be considered one of the leading manufacturers of
            strapping tools on a global scale.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
