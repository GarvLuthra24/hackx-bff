import React from "react";

const Footer = () => {
  return (
    <div className="Footer bg-red-600">
      <div className=" bg-gray-600 h-2/3 pt-10  text-white">
        <div className=" flex flex-row   h-4/5  justify-around max-w-4xl rounded-md dark:bg-gray-800 ml-auto mr-auto mb-2 mt-2">
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
            <div className="mb-5 text-left">CONTACT INFO</div>
            <div className="flex  flex-row items mb-2 justify-left align-baseline text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>

              <div className=" text-sm"> 9999999999</div>
            </div>

            <div className="flex flex-row items-center justify-evenly align-baseline mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>

              <div className=" text-sm">demo@demo.com</div>
            </div>
            <div className="flex flex-row items-center justify-evenly align-baseline">
           
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
              <div className=" text-sm">demo@demo.com</div>
            </div>
          </div>
        </div>


         {/* bottom footer */}

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
                <i class="fa-brands fa-linkedin-in"></i>
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
