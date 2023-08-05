import React, { useState } from "react";
import Sources from "./Sources";

export default function CreateChatbot() {

  const [selectedType, setSelectedType] = useState("files"); // State to keep track of the selected type

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  // character count
  const [text, setText] = useState("");

  const handlecharCount = (event) => {
    setText(event.target.value);
  };

  // handle link input add ,delete and delete all
  const [links, setLinks] = useState([""]);
  const [showInputs, setShowInputs] = useState(false);

  const handleAddLink = () => {
    setLinks([...links, ""]);
    setShowInputs(true);
  };

  const handleDeleteLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleDeleteAllLinks = () => {
    setLinks([]);
    setShowInputs(false);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };
  const showDeleteAllButton = links.length > 0;

//   QnA section add, delete,delete all
const [qna, setqna] = useState([""]);
  const [showqna, setShowqna] = useState(false);

  const handleAddqna = () => {
    setqna([...qna, ""]);
    setShowqna(true);
  };

  const handleDeleteqna = (index) => {
    const newqna = [...qna];
    newqna.splice(index, 1);
    setqna(newqna);
  };

  const handleDeleteAllqna = () => {
    setqna([]);
    setShowqna(false);
  };

  const handleqnaChange = (index, value) => {
    const newqna = [...qna];
    newqna[index] = value;
    setqna(newqna);
  };
  const showDeleteAllqna = qna.length > 0;

  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-10 sm:py-24 px-4 sm:px-6 lg:px-8">
            <main className="isolate">
              <div className="relative px-6 lg:px-8 py-16 sm:py-8">
                <h1 className=" text-3xl mb-8 text-center font-bold">
                 Data Sources
                </h1>

                <div className="pb-8">
                  <div className=" text-center space-x-8">
                    <button
                      onClick={() => handleTypeChange("files")}
                      className={`${
                        selectedType === "files"
                          ? "border-violet-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
                    >
                      Files
                    </button>
                    <button
                      onClick={() => handleTypeChange("text")}
                      className={`${
                        selectedType === "text"
                          ? "border-violet-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
                    >
                      Text
                    </button>
                    <button
                      onClick={() => handleTypeChange("website")}
                      className={`${
                        selectedType === "website"
                          ? "border-violet-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
                    >
                      Website
                    </button>
                    <button
                      onClick={() => handleTypeChange("qna")}
                      className={`${
                        selectedType === "qna"
                          ? "border-violet-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
                    >
                      Q&A
                    </button>
                  </div>
                </div>

                {selectedType === "files" && (
                <Sources/>
                )}
                {selectedType === "text" && (
                  <div className="max-w-3xl m-auto">
                    <div>
                      <textarea
                        name="data"
                        value={text}
                        onChange={handlecharCount}
                        placeholder="data"
                        rows="20"
                        className="my-2 min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      ></textarea>
                      <p className="text-sm text-gray-600 text-center h-8">
                        {" "}
                        {text.length} characters
                      </p>
                    </div>
                  </div>
                )}
                {selectedType === "website" && (
                  <div className="max-w-3xl m-auto">
                    {/* Website content */}
                    <label
                      htmlFor=""
                      className="block text-sm font-medium leading-6 text-gray-900 my-2"
                    >
                      Crawl
                    </label>
                    <div className="relative mt-2 rounded-md">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          name="website"
                          className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                          placeholder="https://www.example.com"
                        />
                        <div className="flex justify-center">
                          <a
                            style={{ backgroundColor: "black" }}
                            className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                            href="/create-new-chatbot"
                          >
                            Fetch links
                          </a>
                        </div>
                      </div>
                      <div className="py-4 text-sm text-zinc-900">
                        This will crawl all the links starting with the URL (not
                        including files on the website).
                      </div>
                    </div>
                    <div className="flex items-center my-4">
                      <hr className="w-full border-gray-300 border-t" />
                      <span className="px-2 text-gray-600 whitespace-nowrap">
                        OR
                      </span>
                      <hr className="w-full border-gray-300 border-t" />
                    </div>
                    <div>
                      <label
                        htmlFor="sitemap"
                        className="block text-sm font-medium leading-6 text-gray-900 my-2"
                      >
                        Submit Sitemap
                      </label>
                      <div className="relative mt-2 rounded-md ">
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                            placeholder="https://www.example.com/sitemap.xml"
                          />
                          <div className="flex justify-center">
                            <a
                              style={{ backgroundColor: "black" }}
                              className="rounded-md px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                              href="/create-new-chatbot"
                            >
                              Load sitemap
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16">
                      <label
                        htmlFor=""
                        className="block text-sm font-medium leading-6 text-gray-900 my-2"
                      >
                        Included Links
                      </label>
                      {showDeleteAllButton && (
                        <div className="flex justify-end">
                          <button
                            className="text-sm text-red-700"
                            onClick={handleDeleteAllLinks}
                          >
                            Delete all
                          </button>
                        </div>
                      )}
                      {links.map((link, index) => (
                        <div
                          key={index}
                          className="relative mt-2 rounded-md shadow-sm"
                        >
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                              placeholder="https://www.example.com/sitemap.xml"
                              value={link}
                              onChange={(e) =>
                                handleLinkChange(index, e.target.value)
                              }
                            />
                            <button
                              type="button"
                              className="text-zinc-600 hover:text-zinc-900"
                              onClick={() => handleDeleteLink(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-red-600 ml-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="my-2 flex justify-end">
                        <button
                          type="button"
                          className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
                          onClick={handleAddLink}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {selectedType === "qna" && (
                  <div className="max-w-3xl m-auto">
                    {/* Q&A content */}

                    <div className="mt-16">
                    {showDeleteAllqna && (
                        <div className="flex justify-end">
                          <button
                            className="text-sm text-red-700"
                            onClick={handleDeleteAllqna}
                          >
                            Delete all
                          </button>
                        </div>
                      )}
                      {qna.map((qna, index) => (
                        <>
                        <div
                          key={index}
                          className="relative mt-2 rounded-md shadow-sm"
                        >
                              <div>
                          <label
                            htmlFor=""
                            className="mt-8 text-sm text-zinc-700"
                          >
                            Questions
                          </label>
                          <textarea
                            className="min-w-0 p-1 w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            rows="3"
                          ></textarea>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="mt-8 text-sm text-zinc-700"
                          >
                            Answer
                          </label>
                          <textarea
                            className="min-w-0 p-1 w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                          <div className="flex justify-end">
                          
                            <button
                              type="button"
                              className="text-zinc-600 hover:text-zinc-900"
                              onClick={() => handleDeleteqna(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-red-600 ml-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        
                        </>
                      ))}
                      <div className="my-2 flex justify-end">
                        <button
                          type="button"
                          className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
                          onClick={handleAddqna}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    
                
                  </div>
                )}
              </div>
              <div>
                <div className=" my-8 max-w-2xl m-auto p-4 rounded border">
                  <div>Included sources</div>
                  <div className="flex py-1 space-x-3"></div>
                  <p className=" text-sm mt-4">
                    Total detected characters:
                    <span className="font-bold">0</span>
                    <span className=" text-zinc-500">/400,000 limit</span>
                  </p>
                  <div className="flex justify-center py-4">
                    <a
                      style={{ backgroundColor: "black" }}
                      className="rounded-md w-full text-center py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                      href="/create-new-chatbot"
                    >
                      Create Chatbot
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </main>
    </div>
  );
}
