import React, { useState } from "react";

export default function Dashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const conversations = [
    {
      question: "what is blockchainguy.net",
      time: "2 days",
      answer: "Blockchainguy.net is a website owned by Sheraz Manzoor, a web3 developer. It serves as a platform where Sheraz showcases his expertise in blockchain, NFTs, smart contracts, BEP20, ERC721, ERC20, and ERC115. The website also features Sheraz's portfolio of completed NFT projects and offers services related to NFT minting and artwork creation.",
    },
  
    // Add more conversations as needed
  ];
 
  return (
    <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class=" pb-8">
        <div class=" text-center space-x-8">
          <button class="border-violet-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
            Conversations
          </button>
          <button class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
            Leads
          </button>
        </div>
      </div>
      <div class=" my-8">
        <div>
          <div class=" max-w-sm">
            <div class="relative w-full text-gray-700">
              <input
                type="text"
                class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                placeholder="Pick date range"
                autoComplete="off"
                role="presentation"
                value=""
              />
              <button
                type="button"
                class="absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="bg-white">
              <section aria-labelledby="filter-heading">
                <h2 id="filter-heading" class="sr-only">
                  Filters
                </h2>
                <div class="my-5 ml-2">
                  <div>
                    <div class="flow-root">
                      <div class="mx-4 flex items-center divide-x divide-gray-200">
                        <div
                          class="relative inline-block px-4 text-left"
                          data-headlessui-state=""
                        >
                          <button
                            class="group inline-flex justify-center text-sm font-medium text-gray-700 ring-0 outline-0 hover:text-gray-900"
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <span>Source</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="space-y-4">
              <button
                data-variant="flat"
                style={{ backgroundColor: "black" }}
                className="rounded-md w-full px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                Export filtered conversations (JSON)
              </button>
              <button
                data-variant="flat"
                style={{ backgroundColor: "black" }}
                className="rounded-md w-full px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                Export filtered conversations (PDF)
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-12 sm:flex-row sm:space-x-8 sm:space-y-0 ">
          <div class=" w-full sm:max-w-sm ">
          {conversations.length === 0 ? (
            <div className="text-center my-24">No conversations found</div>
          ) : (
            <div class="max-h-[34rem] overflow-auto mt-4 w-full">
              <ul role="list" class="divide-y divide-gray-200 w-full">
                {conversations.map((conversation, index) => (
                  <li
                    key={index}
                    class="relative bg-white py-5 mt-4 px-4 hover:bg-zinc-100 bg-zinc-100"
                  >
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1 cursor-pointer">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        <p className="truncate text-sm text-gray-500">
                          Customer: {conversation.question}
                        </p>
                      </div>
                      <time
                        dateTime={conversation.time}
                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                      >
                        <span>{conversation.time}</span>
                      </time>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-black line-clamp-2">
                        Bot: {conversation.answer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
      
          </div>
          <div class="flex justify-center items-center flex-grow "></div>
        </div>
      </div>
    </div>
  );
}
