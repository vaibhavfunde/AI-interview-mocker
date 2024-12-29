import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-1">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Your Personal AI Interview Coach
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Double your chances of landing that job offer with our AI-powered
          interview prep
        </p>

        <div className="flex flex-col mb-8 lg:grid grid-cols-2 sm:flex-row sm:grid grid-cols-2 sm:space-y-0 sm:space-x-4">
          {/* Get Started Button */}
          <a
            href="/dashboard"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
          >
            Get Started
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          {/* Watch Video Button */}
          <a
            href="/#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.993-11.629L9 10.765V6a1 1 0 112 0v4.765l2.007-1.393a1 1 0 011.156 1.55l-3.007 2.086a1 1 0 01-1.156 0l-3.007-2.086a1 1 0 011.156-1.55L9 10.765V6a1 1 0 012 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Watch Video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
  <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
  <div class="flex flex-wrap justify-between items-center mt-8 text-gray-500 sm:flex-col lg:flex-row">
  
  <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
    </svg>
    <p>YouTube</p>
  </a>


  <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
      <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
    </svg>
    <p>Reddit</p>
  </a>

</div>


</div>
<section class="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
  <h2 class="font-bold text-3xl">How it Works?</h2>
  <h2 class="text-md text-gray-500">Give mock interviews in just 3 simple steps</h2>
  
  <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  
    <a class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom h-8 w-8">
        <circle cx="12" cy="12" r="1"></circle>
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"></path>
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.83-2.04-7.36-.02-11.9 4.5-4.54 4.52-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"></path>
      </svg>
      <h2 class="mt-4 text-xl font-bold text-black">Write Prompt for Your Form</h2>
      <p class="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
    </a>

   
    <a class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen h-8 w-8">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3"></path>
      </svg>
      <h2 class="mt-4 text-xl font-bold text-black">Edit Your Form</h2>
      <p class="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
    </a>

  
    <a class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 h-8 w-8">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
      <h2 class="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>
      <p class="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
    </a>
  </div>

  <div class="mt-12 text-center">
    <a href="/sign-in" class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</a>
  </div>
</section>

      </div>
    </>
  );
}
