import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../../api";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
export default function Sources() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (event) => {
    const newFiles = event.target.files;
    console.log(event.target.files[0]);
    // Append the new files to the existing selectedFiles state
    setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
  };

  const handleFileDelete = (fileIndex) => {
    // Remove the file at the specified index from the selectedFiles state
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  async function createNewChatbot() {
    try {
      console.log("Creating ChatBot");
      let values = {
        model: "gpt-3.5-turbo",
        embedding: "openai",
      };

      if (selectedType === "files") {
        values.file = [];

        selectedFiles.forEach((file, index) => {
          let uid = uuidv4().toString();
          // console.log(file);
          file.uid = uid;
          file.originFileObj = { uid };
          values.file.push(file);
        });
        const response = await api.post(
          `/bot/upload?embedding=${values.embedding}&model=${values.model}`,
          values,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(JSON.stringify(response.data));
        alert("Bot Created Successfully.");
        navigate("/open-chatbot/" + response.data.id);
      } else {
        values.content = text;
        console.log(values);
        const response = await api.post("/bot", {
          type: "text",
          ...values,
        });
        console.log(JSON.stringify(response.data));
        alert("Bot Created Successfully.");
        navigate("/open-chatbot/" + response.data.id);
        // return response.data;
      }
    } catch (error) {}
  }
  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger click on the hidden input element
  };
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

  // QnA section add, delete,delete all
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
      <main className="isolate">
        <div className="relative px-6 lg:px-8 py-16 sm:py-8">
          <h1 className=" text-3xl mb-8 text-center font-bold">
            {t("Data Sources")}
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
                {t("Files")}
              </button>
              <button
                onClick={() => handleTypeChange("text")}
                className={`${
                  selectedType === "text"
                    ? "border-violet-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                {t("Text")}
              </button>
              <button
                onClick={() => handleTypeChange("website")}
                className={`${
                  selectedType === "website"
                    ? "border-violet-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                {t("Website")}
              </button>
              <button
                onClick={() => handleTypeChange("qna")}
                className={`${
                  selectedType === "qna"
                    ? "border-violet-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
              >
                {t("Q&A")}
              </button>
            </div>
          </div>
          {selectedType === "files" && (
            <div className="max-w-md m-auto">
              <div>
                <label
                  htmlFor=""
                  className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("Upload Files")}
                </label>
                <div
                  role="presentation"
                  tabIndex="0"
                  className="border border-neutral-200 p-16 cursor-pointer"
                  onClick={handleFileClick}
                  // Call the function to trigger file selection when clicking anywhere in the flex container
                >
                  <input
                    ref={fileInputRef}
                    // Set a ref on the input element
                    accept="text/html,.pdf,.doc,.docx,.txt"
                    tabIndex="-1"
                    name="file"
                    multiple
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center justify-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                      ></path>
                    </svg>
                    <div className="text-center justify-center items-center">
                      <p className="text-sm text-gray-600 ">
                        {t("Drag & drop files here, or click to select files")}
                      </p>
                      <span
                        style={{ direction: isRTL ? "rtl" : "ltr" }}
                        id="file_type_help"
                        className="text-xs text-gray-500 dark:text-gray-300"
                      >
                        {t("Supported File Types: .pdf, .doc, .docx, .txt")}
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                  className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300"
                >
                  {t(
                    "NOTE: Uploading a PDF using safari doesn't work, we're looking into the issue. Make sure the text is OCR'd, i.e. you can copy it."
                  )}
                </p>
                <div className="pt-8">
                  {selectedFiles.length > 0 && (
                    <div>
                      <p className="font-semibold pb-2">
                        {t("Attached Files")}
                        {/* <span className="text-zinc-500 text-sm ml-1">
                          (236 chars)
                        </span> */}
                      </p>
                      {selectedFiles.map((file, index) => (
                        <>
                          <div className="grid grid-cols-10 pb-4">
                            <div key={index} className="col-span-9">
                              <span className="break-words">{file.name} </span>
                              {/* <span className="text-zinc-500 text-sm">
                                {" "}
                                (236 chars)
                              </span> */}
                            </div>
                            <div className="flex items-center justify-end">
                              <button onClick={() => handleFileDelete(index)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4  text-red-600 ml-1"
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
                        </>
                      ))}{" "}
                    </div>
                  )}{" "}
                </div>
              </div>
            </div>
          )}
          {selectedType === "text" && (
            <div className="max-w-3xl m-auto">
              <div>
                <textarea
                  name="data"
                  value={text}
                  onChange={handlecharCount}
                  placeholder={t("data")}
                  rows="20"
                  className="my-2 min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                ></textarea>
                <p className="text-sm text-gray-600 text-center h-8">
                  {" "}
                  {text.length}
                  {t("characters")}
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
                {t("Crawl")}
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
                      {t("Fetch links")}
                    </a>
                  </div>
                </div>
                <div
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                  className="py-4 text-sm text-zinc-900"
                >
                  {t(
                    "This will crawl all the links starting with the URL (not including files on the website)."
                  )}
                </div>
              </div>
              <div className="flex items-center my-4">
                <hr className="w-full border-gray-300 border-t" />
                <span className="px-2 text-gray-600 whitespace-nowrap">
                  {t("OR")}
                </span>
                <hr className="w-full border-gray-300 border-t" />
              </div>
              <div>
                <label
                  htmlFor="sitemap"
                  className="block text-sm font-medium leading-6 text-gray-900 my-2"
                >
                  {t("Submit Sitemap")}
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
                        {t("Load sitemap")}
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
                  {t("Included Links")}
                </label>
                {showDeleteAllButton && (
                  <div className="flex justify-end">
                    <button
                      className="text-sm text-red-700"
                      onClick={handleDeleteAllLinks}
                    >
                      {t("Delete all")}
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
                    {t("Add")}
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
                      {t("Delete all")}
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
                          {t("Questions")}
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
                          {t("Answer")}
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
                    {t("Add")}
                  </button>
                </div>
              </div>
            </div>
          )}{" "}
        </div>
        <div>
          <div className=" my-8 max-w-2xl m-auto p-4 rounded border">
            <div>{t("Included sources")}</div>
            <div className="flex py-1 space-x-3"></div>
            <p
              className=" text-sm mt-4"
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {t("Total detected characters:")}
              <span className="font-bold">{text.length}</span>
              <span className=" text-zinc-500">/400,000 {t("limit")}</span>
            </p>
            <div className="flex justify-center py-4">
              <a
                style={{
                  backgroundColor: "black",
                  direction: isRTL ? "rtl" : "ltr",
                }}
                className="rounded-md w-full text-center py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                onClick={createNewChatbot}
              >
                {t("Create Chatbot")}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
