import React, { useState, useRef } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Dashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([
    "Widget or Iframe",
    "API (non-stream)",
    "API (stream)",
    "Chatbase site",
    "Unspecified",
  ]);

  const options = [
    "Widget or Iframe",
    "API (non-stream)",
    "API (stream)",
    "Chatbase site",
    "Unspecified",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const datepickerRef = useRef(null);
  // const handleButtonClick = () => {
  //     setIsPopupOpen(!isPopupOpen);
  // };
  const [value, setValue] = useState({ startDate: null, endDate: null });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const handleButtonClick = () => {
    if (datepickerRef.current.setOpen === "true") {
      datepickerRef.current.setClose(true);
    } else {
      datepickerRef.current.setOpen(true);
    }
  };

  const conversations = [
    {
      question: "what is blockchainguy.net",
      time: "2 days",
      answer:
        "Blockchainguy.net is a website owned by Sheraz Manzoor, a web3 developer...",
    },
    {
      question: "what is d.net",
      time: "2 days",
      answer: "d.net is a website owned by Sheraz Manzoor, a web3 developer...",
    },
  ];

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );

  // Function to handle conversation click
  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const [selectedType, setSelectedType] = useState("Conversations"); // State to keep track of the selected type

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  return (
    <div className="py-8">
      <div class=" pb-8">
        <div class=" text-center space-x-8">
          <button
            onClick={() => handleTypeChange("Conversations")}
            className={`${
              selectedType === "Conversations"
                ? "border-violet-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
          >
            Conversations
          </button>
          <button
            onClick={() => handleTypeChange("Leads")}
            className={`${
              selectedType === "Leads"
                ? "border-violet-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
          >
            Leads
          </button>
          {/* <button class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
            Leads
          </button> */}{" "}
        </div>
      </div>
      {selectedType === "Conversations" && (
        <>
          <div class=" my-8">
            <div>
              <div class=" max-w-sm">
                <div class="relative w-full text-gray-700">
                  {/* <input
                    type="text"
                    class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    placeholder="Pick date range"
                    autoComplete="off"
                    role="presentation"
                    
                  /> */}
                  <button
                    onClick={handleButtonClick}
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
                  <Datepicker
                    ref={datepickerRef}
                    selected={value.startDate}
                    startDate={value.startDate}
                    endDate={value.endDate}
                    onChange={(date) =>
                      handleValueChange({ startDate: date, endDate: date })
                    }
                    showShortcuts={true}
                  />
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
                                onClick={toggleDropdown}
                              >
                                {isOpen ? "" : ""}
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

                              {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black z-10 ring-opacity-5">
                                  <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                  >
                                    {options.map((option) => (
                                      <div
                                        key={option}
                                        className="block px-2 ml-12 py-2  text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                        role="menuitem"
                                        onClick={() =>
                                          handleOptionClick(option)
                                        }
                                      >
                                        <input
                                          type="checkbox"
                                          className="mr-2 leading-tight"
                                          checked={selectedOptions.includes(
                                            option
                                          )}
                                          onChange={() =>
                                            handleOptionClick(option)
                                          }
                                        />
                                        <span>{option}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
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
                  <div className="text-center my-24">
                    No conversations found
                  </div>
                ) : (
                  <div class="max-h-[34rem] overflow-auto border rounded mt-4 w-full">
                    <ul role="list" class="divide-y divide-gray-200 w-full">
                      {conversations.map((conversation, index) => (
                        <li
                          key={index}
                          className="relative bg-white py-5 mt-4 px-4 hover:bg-zinc-100 bg-zinc-100 cursor-pointer"
                          onClick={() => handleConversationClick(conversation)}
                        >
                          <div className="flex justify-between space-x-3">
                            <div className="min-w-0 flex-1 cursor-pointer">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p className="truncate text-sm text-gray-500">
                                Customer: {conversation.question}{" "}
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
                              Bot: {conversation.answer}{" "}
                            </p>
                          </div>
                        </li>
                      ))}{" "}
                    </ul>
                  </div>
                )}{" "}
              </div>
              {conversations.length > 0 && selectedConversation && (
                <div class="flex justify-center items-center flex-grow ">
                  <div className="w-full px-8">
                    <p className="text-sm font-bold my-2">
                      Source: Chatbase site
                    </p>
                    <div className=" w-full rounded h-[38rem] flex flex-col justify-between mb-4 overflow-auto border-zinc-200 border px-2 py-2 ">
                      <div>
                        <div className="flex justify-start mr-8">
                          <div
                            className=" overflow-auto mb-3 rounded-lg py-3 px-4"
                            style={{
                              backgroundColor: "rgb(241, 241, 240)",
                              color: "black",
                            }}
                          >
                            <div className=" flex flex-col items-start gap-4 break-words">
                              <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                                <div className="prose text-inherit text-left dark:prose-invert ">
                                  <p>Hi! What can I help you with?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-8 mt-4">
                          <div className="flex justify-end ml-8">
                            <div
                              className="overflow-auto mb-3 rounded-lg py-3 px-4"
                              style={{
                                backgroundColor: "rgb(59, 129, 246)",
                                color: "white",
                              }}
                            >
                              <div className="flex flex-col items-start gap-4 break-words">
                                <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                                  <div className="prose text-inherit text-left dark:prose-invert ">
                                    <p>{selectedConversation.question}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start mr-8">
                            <div
                              className="overflow-auto mb-3 rounded-lg py-3 px-4"
                              style={{
                                backgroundColor: "rgb(241, 241, 240)",
                                color: "black",
                              }}
                            >
                              <div className="flex flex-col items-start gap-4 break-words">
                                <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                                  <div className="prose text-inherit text-left dark:prose-invert ">
                                    <p>{selectedConversation.answer}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end">
                                <button className="text-xs text-gray-500">
                                  revise answer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}{" "}
            </div>
          </div>
        </>
      )}
      {selectedType === "Leads" && (
        <>
          <div className="my-8">
            <div className=" max-w-sm">
              <div className="flex space x-4">
                <button
                  data-variant="flat"
                  style={{ backgroundColor: "black" }}
                  className="rounded-md  w-full px-4 py-2 text-sm mt-4 whitespace-nowrap  font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  {" "}
                  Export customers (CSV)
                </button>
                <button
                  data-variant="flat"
                  style={{ backgroundColor: "black" }}
                  className="rounded-md w-full px-4 mx-4 py-2 text-sm  mt-4 whitespace-nowrap font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                >
                  {" "}
                  Export customers (PDF)
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-12 sm:flex-row sm:space-x-8 sm:space-y-0 ">
            <div className=" w-full ">
              <div className="text-center my-24">No customers found</div>
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
}
