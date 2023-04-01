import React from "react";

const Footer = () => {
  return (
    <div className="Footer bg-red-600">
      <div className=" bg-gray-600 h-2/3 text-white">
        <div className=" flex flex-row  h-2/3 w-4/5 justify-around bg-red-400 ml-auto mr-auto mb-2 mt-2">
          <div className=" flex flex-col w-1/4">
            <ul>
              <li className=" text-xl mb-5">ABOUT</li>
              <li className=" text-left text-sm">
                Recycle WordPress Theme was designed to promote environmental
                quality, recycling and corporate sustainability. It is suitable
                for any green business, waste management company,
                environmental-friendly industry, organization or project.
              </li>
            </ul>
          </div>

          <div>
            <h1 className=" mb-5 text-xl">MENU</h1>
            <ul>
              <li className="mb-1">link1</li>
              <li className="mb-1">link2</li>
              <li className="mb-1">link3</li>
              <li className="mb-1">link4</li>
              <li className="mb-1">link5</li>
            </ul>
          </div>
          <div className="text-xl flex flex-col">
            <div className="mb-5">CONTACT INFO</div>
            <div className="flex flex-row items-center justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </div>
        </div>

        <footer class="bg-white rounded-lg shadow mt-4 dark:bg-gray-800 min-w-full">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <p>Stay Connected:</p>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
