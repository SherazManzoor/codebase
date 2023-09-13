import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logoen from "../../images/logo-en.png";
import { useMessage } from "../../hooks/useMessage.ts";
import { useMutation } from "@tanstack/react-query";
export default function ChatbotFrame() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  let chatHistory = [
    {
      msg: "👋 Hi! I am Almeen AI, ask me anything about Alameen!",
      type: "fromBot",
    },
    {
      msg: "By the way, you can create a chatbot like me for your website! 😮",
      type: "fromBot",
    },
  ];

  const { messages } = useMessage();
  const { onSubmit } = useMessage();
  const [writtenMsg, setWrittenMsg] = useState("");
  const { mutateAsync: sendMessage, isLoading: isSending } = useMutation(
    onSubmit,
    {
      onSuccess: () => {
        // form.setFieldValue("message", "");
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
  function getMsg(event) {
    //console.log(event.target.value);
    setWrittenMsg(event.target.value);
  }

  async function clickedMsg() {
    await sendMessage(writtenMsg);
  }
  return (
    <div>
      <div id="next">
        <div
          className="min-h-screen px-4 flex flex-col "
          style={{ background: "white" }}
        >
          <div className=" sticky top-0 w-full">
            <div
              className="flex justify-between py-1 mb-4 z-10"
              style={{ borderBottom: "1px solid #f1f1f0", background: "white" }}
            >
              <div className="flex items-center">
                <img
                  src={logoen}
                  width="115"
                  height="115"
                  alt="profile"
                  className="rounded-full m-1 mr-2"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="flex justify-center items-center">
                <button className="text-sm py-3   hover:text-zinc-600 text-zinc-700">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow ">
            {messages.map((message, index) => (
              // <PlaygroundMessage key={index} {...message} />
              <div className="flex justify-start mr-8" key={index}>
                <div
                  className=" overflow-auto max-w-prose mb-3 rounded-lg py-3 px-4"
                  style={{ backgroundColor: "#f1f1f0", color: "black" }}
                >
                  <div className="flex flex-col items-start gap-4 break-words">
                    <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                        {t(`${message.message}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* {chatHistory.map((single_msg) => (
              <div className="flex justify-start mr-8">
                <div
                  className=" overflow-auto max-w-prose mb-3 rounded-lg py-3 px-4"
                  style={{ backgroundColor: "#f1f1f0", color: "black" }}
                >
                  <div className="flex flex-col items-start gap-4 break-words">
                    <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                        {t(`${single_msg.msg}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
          <div className=" sticky bottom-0 bg-inherit">
            <div className="py-3 flex overflow-x-auto">
              <button className="rounded-xl whitespace-nowrap  mr-1 mt-1 py-2 px-3 text-sm   bg-zinc-100 hover:bg-zinc-200">
                {t("What is Chatbase?")}
              </button>
              <button className="rounded-xl whitespace-nowrap  mr-1 mt-1 py-2 px-3 text-sm   bg-zinc-100 hover:bg-zinc-200">
                {t("How do I add data to my chatbot?")}
              </button>
            </div>
            <div
              className="flex pl-3 p-1 rounded "
              style={{ background: "white", border: "1px solid #e4e4e7" }}
            >
              <div className="flex items-center w-full">
                <input
                  style={{ height: "24px" }}
                  onChange={getMsg}
                  type="text"
                  className=" m-0 w-full min-h-[1.5rem] max-h-36 pr-7 resize-none border-0 bg-inherit flex-1 appearance-none rounded-md focus:ring-0 focus-visible:ring-0 focus:outline-none "
                />
              </div>
              <div className="flex items-end">
                <button onClick={clickedMsg} className=" flex-none p-2">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
