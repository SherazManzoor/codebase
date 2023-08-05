import React, { useState } from "react";

export default function Dashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
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

              <div class="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden">
                <div class="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"></div>
                <div class="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
                  <div class="flex flex-col lg:flex-row py-2">
                    <div class="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
                      <ul class="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          Today
                        </li>
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          Yesterday
                        </li>
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          Last 7 days
                        </li>
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          Last 30 days
                        </li>
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          This month
                        </li>
                        <li class="whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer text-violet-600 dark:text-violet-400 dark:hover:text-violet-400 hover:text-violet-700">
                          Last month
                        </li>
                      </ul>
                    </div>
                    <div class="flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 md:pl-2 pr-2 lg:pr-1">
                      <div class="w-full md:w-[297px] md:min-w-[297px]">
                        <div class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                          <div class="flex-none">
                            <button
                              type="button"
                              class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
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
                                  d="M15.75 19.5L8.25 12l7.5-7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div class="flex flex-1 items-center space-x-1.5">
                            <div class="w-1/2">
                              <button
                                type="button"
                                class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
                              >
                                Aug
                              </button>
                            </div>
                            <div class="w-1/2">
                              <button
                                type="button"
                                class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
                              >
                                2023
                              </button>
                            </div>
                          </div>
                          <div class="flex-none">
                            <button
                              type="button"
                              class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
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
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div class="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                            <div class="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                              <div class="tracking-wide text-gray-500 text-center">
                                Sun
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Mon
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Tue
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Wed
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Thu
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Fri
                              </div>
                              <div class="tracking-wide text-gray-500 text-center">
                                Sat
                              </div>
                            </div>
                            <div class="grid grid-cols-7 gap-y-0.5 my-1">
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                30
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                31
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                1
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                2
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                3
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                4
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-violet-500"
                              >
                                5
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                6
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                7
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                8
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                9
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                10
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                11
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                12
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                13
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                14
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                15
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                16
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                17
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                18
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                19
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                20
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                21
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                22
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                23
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                24
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                25
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                26
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                27
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                28
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                29
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                30
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                              >
                                31
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                1
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                2
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                3
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                4
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                5
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                6
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                7
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                8
                              </button>
                              <button
                                type="button"
                                class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                              >
                                9
                              </button>
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="bg-blue-500 h-7 w-1 rounded-full hidden md:block bg-violet-500"></div>
                          </div>
                          <div class="w-full md:w-[297px] md:min-w-[297px]">
                            <div class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
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
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                              <div class="flex flex-1 items-center space-x-1.5">
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
                                  >
                                    Sep
                                  </button>
                                </div>
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
                                  >
                                    2023
                                  </button>
                                </div>
                              </div>
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10 transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-violet-500/50 focus:bg-violet-100/50"
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
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                              <div class="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sun
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Mon
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Tue
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Wed
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Thu
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Fri
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sat
                                </div>
                              </div>
                              <div class="grid grid-cols-7 gap-y-0.5 my-1">
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  6
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  7
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  8
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  9
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  10
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  11
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  12
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  13
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  14
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  15
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  16
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  17
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  18
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  19
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  20
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  21
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  22
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  23
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  24
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  25
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  6
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                                >
                                  7
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white">
                  <section aria-labelledby="filter-heading">
                    <h2 id="filter-heading" class="sr-only">
                      Filters
                    </h2>
                    <div class="my-5 ml-2">
                      <div>
                        <div class="flow-root">
                          <div class="-mx-4 flex items-center divide-x divide-gray-200">
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
                    class="Button_root__G_l9X text-sm w-full "
                  >
                    Export filtered conversations (JSON)
                  </button>
                  <button
                    data-variant="flat"
                    class="Button_root__G_l9X text-sm w-full "
                  >
                    Export filtered conversations (PDF)
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-12 sm:flex-row sm:space-x-8 sm:space-y-0 ">
              <div class=" w-full sm:max-w-sm ">
                <div className="text-center my-24">No conversations found</div>
                {/* <div class="max-h-[34rem] animate-pulse overflow-auto mt-4 w-full">
                  <ul role="list" class="divide-y divide-gray-200 w-full">
                    <div class="h-20 rounded my-2 bg-zinc-300"></div>
                    <div class="h-20 rounded my-2 bg-zinc-300"></div>
                    <div class="h-20 rounded my-2 bg-zinc-300"></div>
                    <div class="h-20 rounded my-2 bg-zinc-300"></div>
                  </ul>
                </div> */}
              </div>
              <div class="flex justify-center items-center flex-grow "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
