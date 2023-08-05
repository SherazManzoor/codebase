import React from "react";
import { useState } from "react";
export default function Settings() {
  const [selectedside, setSelectedside] = useState("General");

  const handlesideClick = (event) => {
    event.preventDefault();
    setSelectedside(event.target.getAttribute("href"));
  };

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setInputValue(newValue);
  };

  const [showDomain, setShowDomain] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleSwitchToggle = () => {
    setShowDomain(!showDomain);
  };
  const handleSwitchName = () => {
    setShowName(!showName);
  };
  const handleSwitchEmail = () => {
    setShowEmail(!showEmail);
  };
  const handleSwitchPhone = () => {
    setShowPhone(!showPhone);
  };
  //   Reset Ip Limit Range
  const [ipLimit, setIpLimit] = useState(20);

  const defaultIpLimit = 20;
  const defaultIpLimittime = 240;
  const handleIpLimitChange = (event) => {
    const newValue = parseInt(event.target.value);
    setIpLimit(newValue);
  };
  const [popupLimit, setpopupLimit] = useState(3);

  const defaultpopupLimit = 3;
  const handlepopupLimitChange = (event) => {
    const newValue = parseInt(event.target.value);
    setpopupLimit(newValue);
  };
  const [ipLimittime, setIpLimittime] = useState(240);

  const handleIpLimittimeChange = (event) => {
    const newValue = parseInt(event.target.value);
    setIpLimittime(newValue);
  };
  const handleReset = () => {
    setIpLimit(defaultIpLimit); // Reset the value to the default
    setIpLimittime(defaultIpLimittime);
  };
  // Reset Title
  const [Title, setTitle] = useState("Let us know how to contact you");
  let defaultTitle = "Let us know how to contact you";

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    setTitle(newValue);
  };
  const handleTitleReset = () => {
    setTitle(defaultTitle); // Reset the value to the default
  };

  //   Reset Name
  const [Name, setName] = useState("Name");
  let defaultName = "Name";

  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setName(newValue);
  };
  const handleNameReset = () => {
    setName(defaultName); // Reset the value to the default
  };
  //Reset Email
  const [Email, setEmail] = useState("Email");
  let defaultEmail = "Email";

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
  };
  const handleEmailReset = () => {
    setEmail(defaultEmail); // Reset the value to the default
  };
  //Reset Phone
  const [Phone, setPhone] = useState("Phone");
  let defaultPhone = "Phone";

  const handlePhoneChange = (event) => {
    const newValue = event.target.value;
    setPhone(newValue);
  };
  const handlePhoneReset = () => {
    setPhone(defaultPhone); // Reset the value to the default
  };
  //Reset Initial Message
  const [Message, setMessage] = useState("Hi! What can I help you with?");
  let defaultMessage = "Hi! What can I help you with?";

  const handleMessageChange = (event) => {
    const newValue = event.target.value;
    setMessage(newValue);
  };
  const handleMessageReset = () => {
    setMessage(defaultMessage); // Reset the value to the default
  };

  //   Set Textarea value to button
  const [textareaValue, setTextareaValue] = useState("");
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const createButtons = () => {
    if (textareaValue.trim() === "") {
      return null; // Return null if textareaValue is empty or contains only whitespace
    }
    const lines = textareaValue.split("\n");
    return lines.map((line, index) => (
      <button
        key={index}
        className="rounded-xl whitespace-nowrap mr-1 mt-1 py-2 px-3 text-sm bg-zinc-100 hover:bg-zinc-200"
      >
        {line}
      </button>
    ));
  };
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  const [isChatIconChecked, setIsChatIconChecked] = useState(false);
  const handleChatIconChange = (event) => {
    setIsChatIconChecked(event.target.checked);
  };
  const [Color, setColor] = useState("#3B81F6");
  let defaultColor = "#3B81F6";

  const handleColorChange = (event) => {
    const newValue = event.target.value;
    setColor(newValue);
  };
  const handleColorReset = () => {
    setColor(defaultColor);
  };

  const [BubbleColor, setBubbleColor] = useState("black");
  let defaultBubbleColor = "black";

  const handleBubbleColorChange = (event) => {
    const newValue = event.target.value;
    setBubbleColor(newValue);
  };
  const handleBubbleColorReset = () => {
    setBubbleColor(defaultBubbleColor);
  };
// align bubble icon
  const [justifyContentValue, setJustifyContentValue] = useState("flex-end");

  const handleJustifyContentChange = (event) => {
    setJustifyContentValue(event.target.value);
  };

    const [copied, setCopied] = useState(false);
  
    const handleCopyClick = () => {
      const textToCopy = document.getElementById("textToCopy").innerText;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
  
      // Reset the copied state after a short delay (optional)
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  return (
    <>
      <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-4 md:col-span-3">
            <div className="md:hidden"> </div>
            <div className="hidden sm:flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col">
                  <li>
                    <ul className="-mx-2 space-y-1">
                      <li>
                        <a
                          href="General"
                          onClick={handlesideClick}
                          className={`text-gray-700 hover:text-violet-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold whitespace-nowrap ${
                            selectedside === "General"
                              ? "bg-gray-50 text-violet-600"
                              : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className={`text-gray-400 group-hover:text-violet-600 h-6 w-6 ${
                              selectedside === "General"
                                ? "bg-gray-50 text-violet-600"
                                : "shrink-0"
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          General
                        </a>
                      </li>
                      <li>
                        <a
                          href="Leads"
                          onClick={handlesideClick}
                          className={`text-gray-700 hover:text-violet-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold whitespace-nowrap ${
                            selectedside === "Leads"
                              ? "bg-gray-50 text-violet-600"
                              : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className={`text-gray-400 group-hover:text-violet-600 h-6 w-6 ${
                              selectedside === "Leads"
                                ? "bg-gray-50 text-violet-600"
                                : "shrink-0"
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            ></path>
                          </svg>
                          Leads
                        </a>
                      </li>
                      <li>
                        <a
                          href="Chat Interface"
                          onClick={handlesideClick}
                          className={`text-gray-700 hover:text-violet-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold whitespace-nowrap ${
                            selectedside === "Chat Interface"
                              ? "bg-gray-50 text-violet-600"
                              : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className={`text-gray-400 group-hover:text-violet-600 h-6 w-6 ${
                              selectedside === "Chat Interface"
                                ? "bg-gray-50 text-violet-600"
                                : "shrink-0"
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                            ></path>
                          </svg>
                          Chat Interface
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {selectedside === "General" && (
            <div className="col-span-12 sm:col-span-8 md:col-span-9">
              <div className="border border-gray-200 rounded mb-10">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                    General
                  </h3>
                </div>
                <div className="p-5">
                  <div className="pb-8">
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chatbot ID
                    </label>
                    <div className="flex space-x-4 items-center mt-1">
                      <div id="textToCopy" className="font-semibold">
                        cg4jKuFttHITHAOVYD24a{" "}
                      </div>
                      <button  onClick={handleCopyClick} className="h-7 w-7 border border-zinc-900/10 text-gray-700 p-1 rounded-lg hover:bg-gray-200">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                          ></path>
                        </svg>
                        {copied ? "Copied!" : ""}
                      </button>
                    </div>
                  </div>
                  <div className="pb-8">
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Number of characters
                    </label>
                    <div className="mt-1 font-semibold">7,332</div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value="blockchainguy.net"
                        name="name"
                        className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900 "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 px-5 py-3">
                  <button className="inline-flex items-center justify-center text-sm transform-none normal-case rounded leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 bg-zinc-700 text-zinc-200 border-zinc-600 cursor-not-allowed hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-700 hover:cursor-pointer h-7 w-16">
                    Save
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded mb-10">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                    OpenAI
                  </h3>
                </div>
                <div className="p-5">
                  <div className="pb-8">
                    <div className="flex justify-between">
                      <label
                        htmlFor=""
                        className="block text-sm font-medium text-gray-700"
                      >
                        Base Prompt (system message)
                      </label>
                      <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                        Reset
                      </button>
                    </div>
                    <div className="mt-1">
                      <textarea
                        name="intructions"
                        maxLength="5000"
                        rows="5"
                        className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      >
                        I want you to act as a document that I am having a
                        conversation with. Your name is "AI Assistant". You will
                        provide me with answers from the given info. If the
                        answer is not included, say exactly "Hmm, I am not
                        sure." and stop after that. Refuse to answer any
                        question not about the info. Never break character.
                      </textarea>
                    </div>
                  </div>
                  <div className="pb-8">
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Model
                    </label>
                    <select
                      name="model"
                      id="model"
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                    >
                      <option value="gpt-3.5-turbo" selected>
                        gpt-3.5-turbo
                      </option>
                      <option value="gpt-4" disabled>
                        gpt-4
                      </option>
                    </select>
                    <p className="mt-2 text-sm text-zinc-500">
                      1 message using gpt-3.5-turbo costs 1 message credit. 1
                      message using gpt-4 costs 20 message credits.
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Temperature
                    </label>
                    <p className="text-sm">{inputValue}</p>
                    <input
                      id="steps-range"
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={inputValue}
                      className="w-full h-2 bg-gray-200 rounded-lg accent-violet-700 appearance-none cursor-pointer dark:bg-gray-700"
                      onChange={handleInputChange}
                    />
                    <div className="flex justify-between">
                      <p className="text-zinc-700 text-xs">Reserved</p>
                      <p className="text-zinc-700 text-xs">Creative</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 px-5 py-3">
                  <button className="inline-flex items-center justify-center text-sm transform-none normal-case rounded leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 bg-zinc-700 text-zinc-200 border-zinc-600 cursor-not-allowed hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-700 hover:cursor-pointer h-7 w-16">
                    Save
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded mb-10">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                    Access
                  </h3>
                </div>
                <div className="p-5">
                  <div className="pb-8">
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Visibilty
                    </label>
                    <select
                      name=""
                      id=""
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                    >
                      <option value="private">private</option>
                      <option value="can_be_embedded">
                        can be embedded on website
                      </option>
                    </select>
                    <p className="mt-2 text-sm text-zinc-500">
                      'private': No one can access your chatbot except you (your
                      account)
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">
                      'can be embedded on website': Other people can chat with
                      your chatbot if you send them the link. You can also embed
                      it on your website so your website visitors are able to
                      use it.
                    </p>
                  </div>
                  <div className="pb-8">
                    <div>
                      <label
                        htmlFor=""
                        className="block text-sm font-medium text-gray-700 pb-2"
                      >
                        Only allow the iframe and widget on specific domains
                      </label>
                      <button
                        role="switch"
                        type="button"
                        tabIndex="0"
                        aria-checked={showDomain}
                        className={`${
                          showDomain ? "bg-violet-600" : "bg-gray-200"
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                          showDomain
                            ? "focus:ring-violet-600"
                            : "focus:ring-gray-500"
                        } focus:ring-offset-2`}
                        onClick={handleSwitchToggle}
                      >
                        <span
                          aria-hidden="true"
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            showDomain ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></span>
                      </button>
                      {showDomain && (
                        <>
                          <div className="py-4">
                            <label
                              htmlFor=""
                              className="block text-sm font-medium text-gray-700"
                            >
                              Domains
                            </label>
                          </div>
                          <div className="mt-1">
                            <textarea
                              name="domains"
                              placeholder="example.com"
                              maxLength="400"
                              className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            >
                              blockchainguy.net
                            </textarea>
                            <p className="mt-2 text-sm text-zinc-500">
                              Enter each domain in a new line
                            </p>
                            <p className="mt-2 text-sm text-zinc-500">
                              Domains you want to embed your chatbot on. Your
                              chatbot visibility has to be 'can be embedded on
                              website' for this to work.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-5">
                    <div className="pb-8">
                      <div className="flex justify-between">
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700"
                        >
                          Rate Limiting
                        </label>
                        <button
                          onClick={handleReset}
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                        >
                          Reset
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-zinc-500">
                        Limit the number of messages sent from one device on the
                        iframe and chat bubble (this limit will not be applied
                        to you on chatbase.co, only on your website for your
                        users to prevent abuse).
                      </p>
                      <div className="mt-1 text-sm text-zinc-700">
                        Limit to only
                        <input
                          type="number"
                          name="ip_limit"
                          value={ipLimit}
                          defaultValue={defaultIpLimit}
                          onChange={handleIpLimitChange}
                          className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                         
                        />
                        messages every
                        <input
                          type="number"
                          name="ip_limit_timeframe"
                          value={ipLimittime}
                          defaultValue={defaultIpLimittime}
                          className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          onChange={handleIpLimittimeChange}
                        />
                        seconds.
                      </div>
                      <div className="text-sm text-zinc-700 my-4">
                        Show this message to show when limit is hit
                        <input
                          name="ip_limit_message"
                          value="Too many messages in a row"
                          className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end bg-gray-100 px-5 py-3">
                    <button className="inline-flex items-center justify-center text-sm bg-black text-zinc-200 transform-none normal-case cursor-pointer rounded leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 hover:bg-zinc-800 hover:text-white border h-7 w-16">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedside === "Leads" && (
            <div className="col-span-12 sm:col-span-8 md:col-span-9">
              <div className="border border-gray-200 rounded mb-10">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                    Collect Customer Info
                  </h3>
                </div>
                <div className="p-5">
                  <div className="pb-4">
                    <div className="max-w-lg">
                      <div className="py-4">
                        <div className="flex justify-between">
                          <label
                            htmlFor=""
                            className="block font-semibold text-sm pb-2"
                          >
                            Title
                          </label>
                          <button
                            onClick={handleTitleReset}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                          >
                            Reset
                          </button>
                        </div>
                        <input
                          type="text"
                          name="title"
                          maxLength="300"
                          defaultValue={defaultTitle}
                          value={Title}
                          onChange={handleTitleChange}
                          className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                        />
                      </div>
                      <div className="py-4">
                        <label
                          htmlFor=""
                          className="block font-semibold text-sm pb-2"
                        >
                          Name
                        </label>
                        <button
                          role="switch"
                          type="button"
                          tabIndex="0"
                          aria-checked={showName}
                          className={`${
                            showName ? "bg-violet-600" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                            showName
                              ? "focus:ring-violet-600"
                              : "focus:ring-gray-500"
                          } focus:ring-offset-2`}
                          onClick={handleSwitchName}
                        >
                          <span
                            aria-hidden="true"
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              showName ? "translate-x-5" : "translate-x-0"
                            }`}
                          ></span>
                        </button>
                        {showName && (
                          <>
                            <div className="mt-2">
                              <div className="flex justify-end">
                                <button
                                  onClick={handleNameReset}
                                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                >
                                  Reset
                                </button>
                              </div>

                              <input
                                type="text"
                                name="title"
                                maxLength="300"
                                defaultValue={defaultName}
                                value={Name}
                                onChange={handleNameChange}
                                className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="py-4">
                        <label
                          htmlFor=""
                          className="block font-semibold text-sm pb-2"
                        >
                          Email
                        </label>
                        <button
                          role="switch"
                          type="button"
                          tabIndex="0"
                          aria-checked={showEmail}
                          className={`${
                            showEmail ? "bg-violet-600" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                            showEmail
                              ? "focus:ring-violet-600"
                              : "focus:ring-gray-500"
                          } focus:ring-offset-2`}
                          onClick={handleSwitchEmail}
                        >
                          <span
                            aria-hidden="true"
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              showEmail ? "translate-x-5" : "translate-x-0"
                            }`}
                          ></span>
                        </button>
                        {showEmail && (
                          <>
                            <div className="mt-2">
                              <div className="flex justify-end">
                                <button
                                  onClick={handleEmailReset}
                                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                >
                                  Reset
                                </button>
                              </div>

                              <input
                                type="email"
                                name="email"
                                maxLength="300"
                                defaultValue={defaultEmail}
                                value={Email}
                                onChange={handleEmailChange}
                                className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="py-4">
                        <label
                          htmlFor=""
                          className="block font-semibold text-sm pb-2"
                        >
                          Phone
                        </label>
                        <button
                          role="switch"
                          type="button"
                          tabIndex="0"
                          aria-checked={showPhone}
                          className={`${
                            showPhone ? "bg-violet-600" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                            showPhone
                              ? "focus:ring-violet-600"
                              : "focus:ring-gray-500"
                          } focus:ring-offset-2`}
                          onClick={handleSwitchPhone}
                        >
                          <span
                            aria-hidden="true"
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              showPhone ? "translate-x-5" : "translate-x-0"
                            }`}
                          ></span>
                        </button>
                        {showPhone && (
                          <>
                            <div className="mt-2">
                              <div className="flex justify-end">
                                <button
                                  onClick={handlePhoneReset}
                                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                >
                                  Reset
                                </button>
                              </div>

                              <input
                                name="phone"
                                maxLength="300"
                                defaultValue={defaultPhone}
                                value={Phone}
                                onChange={handlePhoneChange}
                                className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end bg-gray-100 px-5 py-3">
                <button className="inline-flex items-center justify-center cursor-pointer text-sm transform-none normal-case rounded leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 bg-zinc-700 text-zinc-200 border-zinc-600 cursor-not-allowed hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-700  h-7 w-16">
                  Save
                </button>
              </div>
            </div>
          )}
          {selectedside === "Chat Interface" && (
            <div className="col-span-12 sm:col-span-8 md:col-span-9">
              <div className="border border-gray-200 rounded mb-10">
                <div className="border-b border-gray-200 bg-white py-4 px-5">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                    Chat Interface
                  </h3>
                </div>
                <div className="p-5">
                  <h4 className="mb-8 text-sm text-zinc-600">
                    Note: Applies when embedded on a website
                  </h4>
                  <div className=" flex justify-between lg:space-x-8 flex-col lg:flex-row">
                    <div className="flex-1 w-2/2 lg:w-1/2 pb-5">
                      <div className="pb-8">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-700">
                            Initial Messages
                          </label>
                          <button
                            onClick={handleMessageReset}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                          >
                            Reset
                          </button>
                        </div>
                        <div className="mt-1">
                          <textarea
                            name="initial_messages"
                            defaultValue={defaultMessage}
                            value={Message}
                            onChange={handleMessageChange}
                            placeholder="Hi! What can I help you with?"
                            className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            maxLength="1000"
                          >
                            Hi! What can I help you with?
                          </textarea>
                          <p className="mt-2 text-sm text-zinc-500">
                            Enter each message in a new line.
                          </p>
                        </div>
                      </div>
                      <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-700">
                          Suggested Messages
                        </label>
                        <div className="mt-1">
                          <textarea
                            name="suggested_messages"
                            placeholder="What is example.com?"
                            value={textareaValue}
                            onChange={handleTextareaChange}
                            className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          ></textarea>
                          <p className="mt-2 text-sm text-zinc-500">
                            Enter each message in a new line.
                          </p>
                        </div>
                      </div>
                      <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-700">
                          Theme
                        </label>
                        <select
                          id="theme"
                          name="theme"
                          className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                        >
                          <option value="light" selected="">
                            light
                          </option>
                          <option value="dark">dark</option>
                        </select>
                      </div>
                      <div className="pb-8">
                        {!isCheckboxChecked && (
                          <>
                            {" "}
                            <label className="block text-sm font-medium text-gray-700">
                              Update chatbot profile picture
                            </label>
                            <input
                              id="bot_profile_picture"
                              type="file"
                              accept="image/*"
                              name="bot_profile_picture"
                              className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            />
                          </>
                        )}
                        <label className="block text-sm font-medium text-red-700"></label>
                      </div>
                      <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-700">
                          Remove Chatbot Profile Picture
                        </label>
                        <input
                          type="checkbox"
                          name="should_remove_bot_profile_picture"
                          checked={isCheckboxChecked}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                        />
                      </div>
                      <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-700">
                          Display name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="pb-8">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-700">
                            User Message Color
                          </label>
                          <button
                            onClick={handleColorReset}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                          >
                            Reset
                          </button>
                        </div>
                        <div className="flex items-center">
                          <div className="relative">
                            <div
                              className="p-1 h-5 w-5 border bg-gray-50"
                              role="colorPicker"
                            >
                              <input
                                type="Color"
                                value={Color}
                                onChange={handleColorChange}
                                className="h-8 w-8 cursor-pointer"
                                style={{
                                  backgroundColor: { Color },
                                }}
                                role="colorPicker"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-900 pb-10">
                        **If the changes here don &#x27;t show up immediately on
                        your website try clearing your browser cache or use
                        incognito. (New users will see the changes
                        immediately)**
                      </p>
                      <div className="pb-8">
                        {!isChatIconChecked && (
                          <>
                            {" "}
                            <label className="block text-sm font-medium text-gray-700">
                              Update chat icon
                            </label>
                            <input
                              id="chat_icon"
                              type="file"
                              accept="image/*"
                              name="bot_profile_picture"
                              className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                            />
                          </>
                        )}

                        <label className="block text-sm font-medium text-red-700"></label>
                      </div>
                      <div className="pb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Remove chat icon
                        </label>
                        <input
                          type="checkbox"
                          checked={isChatIconChecked}
                          onChange={handleChatIconChange}
                          name="should_remove_bot_profile_picture"
                          className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                        />
                      </div>
                      <div className="pb-8">
                        <div className="flex justify-between ">
                          <label className="block text-sm font-medium text-gray-700">
                            Chat Bubble Button Color
                          </label>
                          <button
                            onClick={handleBubbleColorReset}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                          >
                            Reset
                          </button>
                        </div>
                        <div className="flex items-center">
                          <div className="relative">
                            <div
                              className="p-1 border bg-gray-100"
                              role="colorPicker"
                            >
                              <input
                                type="Color"
                                value={BubbleColor}
                                onChange={handleBubbleColorChange}
                                className="h-8 w-8 cursor-pointer"
                                style={{
                                  backgroundColor: { BubbleColor },
                                }}
                                role="colorPicker"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-700">
                          Align Chat Bubble Button
                        </label>
                        <select
                          id="theme"
                          name="theme"
                          value={justifyContentValue}
                          onChange={handleJustifyContentChange}
                          className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                        >
                          <option value="flex-end">right</option>
                          <option value="flex-start">left</option>
                        </select>
                      </div>
                      <div className="mt-1 text-sm text-zinc-700">
                        Auto show initial messages pop-ups after
                        {/* <!-- --> */}
                        <input
                          name="auto_open_chat_window_after"
                          type="number"
                          value={popupLimit}
                          defaultValue={defaultpopupLimit}
                          onChange={handlepopupLimitChange}
                          className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                        
                        />
                        {/* <!-- --> */}
                        seconds (negative to disable)
                      </div>
                    </div>
                    <div className="flex-1 w-2/2 lg:w-1/2">
                      <div
                        className=" w-full rounded h-[38rem] flex flex-col justify-between mb-4 overflow-auto border-zinc-200 border px-2 pb-2 "
                        style={{ background: "white" }}
                      >
                        <div>
                          <div
                            className="flex justify-between py-1 mb-4  mb-2"
                            style={{
                              borderBottom: "1px solid #f1f1f0",
                              background: "white",
                            }}
                          >
                            <div className="flex items-center"></div>
                            <div className="flex justify-center items-center">
                              <button className="text-sm py-3   hover:text-zinc-600 text-zinc-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-5 w-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                  ></path>
                                </svg>
                              </button>
                              <button className="text-sm py-3 ml-3  hover:text-zinc-600 text-zinc-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-start mr-8">
                            <div
                              className=" overflow-auto max-w-prose mb-3 rounded-lg py-3 px-4"
                              style={{
                                backgroundColor: "#f1f1f0",
                                color: "black",
                              }}
                            >
                              <div className="flex flex-col items-start gap-4 break-words">
                                <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                                  <p>Hi! What can I help you with?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end ml-8">
                            <div
                              className=" overflow-auto max-w-prose mb-3 rounded-lg py-3 px-4"
                              style={{
                                backgroundColor: "#3B81F6",
                                color: "white",
                              }}
                            >
                              <div className="flex flex-col items-start gap-4 break-words dark">
                                <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                                  <p>Hi</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clear-both ">
                          <div className="py-3 flex overflow-x-auto ">
                            {createButtons()}
                          </div>
                          <div
                            className="flex pl-3 p-1 rounded"
                            style={{
                              background: "white",
                              border: "1px solid #e4e4e7",
                            }}
                          >
                            <input
                              type="text"
                              aria-label="chat input"
                              className=" min-w-0 bg-inherit flex-1 appearance-none rounded-md focus:outline-none sm:text-sm "
                            />
                            <div>
                              <button type="submit" className="p-2 flex-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-5 w-5"
                                >
                                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex pb-12"
                        style={{ justifyContent: justifyContentValue }}
                      >
                        <div
                          className="p-3 rounded-full"
                          style={{ backgroundColor: BubbleColor }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.3"
                            stroke="white"
                            width="24"
                            height="24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end bg-gray-100 px-5 py-3">
                  <button
                    data-variant="flat"
                    className="inline-flex items-center justify-center text-sm transform-none normal-case rounded leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 bg-zinc-700 text-zinc-200 border-zinc-600 cursor-not-allowed hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-700 hover:cursor-not-allowed h-7 w-16"
                    disabled=""
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
