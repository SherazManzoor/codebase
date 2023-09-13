import React from "react";
import ChatbotFrame from "./components/ChatbotFrame";
import { useState, useEffect, useRef } from "react";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Sources from "./components/Sources";
import Inetgration from "./components/Inetgration";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import api from "../api";

export default function OpenChatbot() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const { id } = useParams();
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Fetch collection data from the backend API
        const response = await api.get(`/bot/${id}/embed`);
        console.log(JSON.stringify(response));
        setStatus(response.data.inProgress);
        //console.log(response.data)
        // setProjectData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectData();
  }, []);

  const [selectedLink, setSelectedLink] = useState("Chatbot");

  const handleLinkClick = (event) => {
    event.preventDefault();
    setSelectedLink(event.target.getAttribute("href"));
  };
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleCloseOnOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
        setShowShareModal(false);
        setShowDelModal(false);
      }
    };

    if (showModal || showShareModal || showDelModal) {
      document.addEventListener("mousedown", handleCloseOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseOnOutsideClick);
    };
  }, [showModal, showShareModal, showDelModal]);

  async function deleteBot() {
    console.log("Deleting :" + id);
    const response = await api.delete(`/bot/${id}`);
    alert("Bot Deleted Successfully.");
    handleCloseDelModal();
  }
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleOpenShareModal = () => {
    setShowShareModal(true);
  };
  const handleOpenDelModal = () => {
    setShowDelModal(true);
  };
  const handleCloseDelModal = () => {
    setShowDelModal(false);
  };

  const iframeCode = `<iframe
    src=""
    width="100%"
    style="height: 10%; min-height: 50px;"
    frameborder="0"
  ></iframe>`;

  const iframeCode2 = `  <script>
  window.almeenConfig = {
    chatbotId: "cg4jKuFttHITHAOVYD24a",
  }
</script>
<script
  src="https://www.alameen.co/embed.min.js"
  id="cg4jKuFttHITHAOVYD24a"
  defer>
</script>`;
  const iframeCode3 = ` https://www.alameen.co/chatbot-iframe/cg4jKuFttHITHAOVYD24a`;
  let hostUrl = "http://localhost:3000";
  let public_id = id;
  function EmbedBoardTitle({ content, title, description }) {
    return (
      <div className="px-4 py-6 sm:p-6 lg:pb-8 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="mt-6 flex flex-col lg:flex-row">
          <div className="flex-grow space-y-6">
            <div className="flex">
              <div className="flex-grow">
                <input
                  type="text"
                  readOnly
                  defaultValue={content}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              {/* <span className="ml-3">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(content);
                    notification.success({
                      message: "Copied!",
                      placement: "bottomRight",
                    });
                  }}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <ClipboardIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Copy</span>
                </button>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <iframe
        src={`http://localhost:3000/bot/${id}?mode=iframe&no=button`}
        className="w-full bg-white"
        height={585}
        title="Alameen"
      /> */}
      {/* <div className="divide-y lg:col-span-9">
        <EmbedBoardTitle
          title="Public URL"
          description="This is the public URL of your bot. You can use this URL to embed"
          content={`${hostUrl}/bot/${public_id}`}
        />

        <EmbedBoardTitle
          title="Iframe"
          description="You can use this iframe to embed your bot"
          content={`<iframe src="${hostUrl}/bot/${public_id}?mode=iframe" width="400" height="500" />`}
        />

        <EmbedBoardTitle
          title="Script"
          description="You can use this script to embed your bot to your website or web app"
          content={`<script src="${hostUrl}/chat.min.js" data-chat-url="${hostUrl}/bot/${public_id}" data-btn-position="bottom-right" defer></script>`}
        />
        <script
          src="http://localhost:3000/chat.min.js"
          data-chat-url="http://localhost:3000/bot/clmcf887f0001lq282soac1g0"
          data-btn-position="bottom-right"
          defer
        ></script>
        <iframe
          src="http://localhost:3000/bot/clmcf887f0001lq282soac1g0?mode=iframe"
          width="400"
          height="500"
        />
      </div> */}
      <main id="skip">
        <section className="bg-white">
          {status ? (
            <div>
              <h1>Loading... </h1>
            </div>
          ) : (
            <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
              <div>
                <div className=" pb-12 py-8 ">
                  <h1
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                    className=" text-2xl md:text-3xl font-bold text-black text-center mb-5"
                  >
                    {t("Chatbot Name")}
                  </h1>

                  <div className="no-scrollbar overflow-x-auto">
                    <div className="flex flex-wrap md:justify-center whitespace-nowrap text-sm  space-x-2 ">
                      <a
                        href="Chatbot"
                        onClick={handleLinkClick}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "Chatbot"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Chatbot")}
                      </a>
                      <a
                        href="Settings"
                        onClick={handleLinkClick}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "Settings"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Settings")}
                      </a>
                      {/* <a
                        href="Dashboard"
                        onClick={handleLinkClick}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "Dashboard"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Dashboard")}
                      </a> */}
                      <a
                        href="Sources"
                        onClick={handleLinkClick}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "Sources"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Sources")}
                      </a>
                      <a
                        href="Integrations"
                        onClick={handleLinkClick}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "Integrations"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Integrations")}
                      </a>

                      <a
                        href="#"
                        onClick={handleOpenModal}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "#"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Embed on site")}
                      </a>
                      <a
                        href="#"
                        onClick={handleOpenShareModal}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "#"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Share")}
                      </a>
                      <a
                        href="#"
                        onClick={handleOpenDelModal}
                        className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center border-b-2 px-1 pt-1 font-medium pb-1 col-span-1 ${
                          selectedLink === "#"
                            ? "border-violet-500 text-gray-900"
                            : ""
                        }`}
                      >
                        {t("Delete")}
                      </a>
                    </div>
                  </div>

                  {selectedLink === "Chatbot" && (
                    <div className="max-w-4xl w-full m-auto py-12">
                      <ChatbotFrame />
                    </div>
                  )}
                  {selectedLink === "Settings" && <Settings id={id} />}
                  {selectedLink === "Dashboard" && <Dashboard />}
                  {selectedLink === "Sources" && (
                    <div className="max-w-4xl w-full m-auto py-12">
                      <Sources />
                    </div>
                  )}
                  {selectedLink === "Integrations" && (
                    <div className="max-w-4xl w-full m-auto py-12">
                      <Inetgration />
                    </div>
                  )}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="modal-background fixed inset-0 bg-gray-900 opacity-50"></div>
                      <div
                        ref={modalRef}
                        className="modal-content bg-white p-8 rounded-lg shadow-lg z-50"
                      >
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              style={{ direction: isRTL ? "rtl" : "ltr" }}
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              {t("Embed on website")}
                            </h3>
                            <div className="mt-2">
                              <p
                                style={{ direction: isRTL ? "rtl" : "ltr" }}
                                className="text-sm text-gray-500"
                              >
                                {t(
                                  "To add the chatbot any where on your website, add this iframe to your html code"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <pre className=" w-full overflow-auto text-xs bg-slate-100 rounded p-2">
                            <code>{iframeCode}</code>{" "}
                          </pre>
                        </div>
                        <div className="mt-2">
                          <p
                            style={{ direction: isRTL ? "rtl" : "ltr" }}
                            className="text-sm text-gray-500"
                          >
                            {t(
                              "To add a chat bubble to the bottom right of your website add this script tag to your html"
                            )}
                          </p>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <pre className=" w-full overflow-auto text-xs bg-slate-100 rounded p-2">
                            <code>{iframeCode2}</code>{" "}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                  {showShareModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="modal-background fixed inset-0 bg-gray-900 opacity-50"></div>
                      <div
                        ref={modalRef}
                        className="modal-content bg-white p-4 md:p-8 rounded-lg shadow-lg z-50"
                      >
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              style={{ direction: isRTL ? "rtl" : "ltr" }}
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              {t("Share your chatbot")}
                            </h3>
                            <div className="mt-2">
                              <p
                                style={{ direction: isRTL ? "rtl" : "ltr" }}
                                className="text-sm text-gray-500"
                              >
                                {t("Use this link to access the chatbot")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <pre className=" w-80 md:w-full no-scrollbar overflow-auto text-xs bg-slate-100 rounded p-2">
                            <code>{iframeCode3}</code>{" "}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                  {showDelModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="modal-background fixed inset-0 bg-gray-900 opacity-50"></div>
                      <div
                        ref={modalRef}
                        className="modal-content bg-white p-8 rounded-lg shadow-lg z-50"
                      >
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6 text-red-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                              ></path>
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              style={{ direction: isRTL ? "rtl" : "ltr" }}
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              {t("Delete chatbot")}
                            </h3>
                            <div className="mt-2">
                              <p
                                style={{ direction: isRTL ? "rtl" : "ltr" }}
                                className="text-sm text-gray-500"
                              >
                                {t(
                                  "Are you sure you want to delete your chatbot? This action cannot be undone."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={deleteBot}
                          >
                            {t("Delete")}
                          </button>
                          <button
                            type="button"
                            onClick={handleCloseDelModal}
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                          >
                            {t("Cancel")}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
