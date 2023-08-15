import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Pricing() {

    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";

    const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);
    const prices = isMonthlyBilling
    ? ["$19", "$99", "$399"]
    : ["$190", "$990", "$3990"];
    const handleToggle = () => {
      setIsMonthlyBilling(!isMonthlyBilling);
    };
  return (
    <div>
      <main id="skip">
        <section className="bg-white">
          <div className=" max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-4xl font-extrabold text-black py-4 sm:text-center sm:text-6xl">
                {t("Pricing Plans")}
              </h1>
              <p className="mt-6 text-center">
                {t("Get 2 months for free by subscribing yearly!")}
              </p>
              <div className="relative self-center mt-2 bg-zinc-100 rounded-lg p-0.5 flex sm:mt-4 border border-zinc-200">
              <button
          type="button"
          className={`relative w-1/2 ${
            isMonthlyBilling
              ? "bg-zinc-300 border-zinc-200"
              : "border border-transparent"
          } shadow-sm text-black rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          onClick={handleToggle}
        >
          {t("Monthly billing")}
        </button>
        <button
          type="button"
          className={`relative w-1/2 ${
            isMonthlyBilling
              ? "border border-transparent"
              : "bg-zinc-300 border-zinc-200"
          } text-zinc-600 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          onClick={handleToggle}
        >
          {t("Yearly billing")}
        </button>
              </div>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      {t("Free")}
                    </h2>
                    <div style={{ direction: isRTL ? "rtl" : "ltr" }} className="py-4">
                      <li     className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("30 message credits/month")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("1 chatbot")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("400,000 characters/chatbot")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Embed on unlimited websites")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Upload multiple files")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("View conversation history")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span className="text-sm font-semibold px-2 text-zinc-700">
                          {t("Capture leads")}
                        </span>
                      </li>
                      <li   className="flex space-x-2 mb-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-2 w-2 flex-shrink-0 "
                        >
                          <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"></path>
                        </svg>
                        <span  className="text-sm font-semibold  text-zinc-700">
                          {t("Chatbots get deleted after 7 days of inactivity")}
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">$0</span>
                    </p>
                    <a href="/signin">
                      <button
                        data-variant="flat"
                        className="Button_root__G_l9X Button_disabled__Ksgjy opacity-70 cursor-not-allowed block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-10"
                        disabled
                        type="button"
                      >
                        {t("Signed in")}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      {t("Hobby")}
                    </h2>
                    <div  style={{ direction: isRTL ? "rtl" : "ltr" }} className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("2,000 message credits/month")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("2 chatbots")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("11,000,000 characters/chatbot")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Embed on unlimited websites")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Upload multiple files")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("View conversation history")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Capture leads")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("API access")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Zapier integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Slack integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Wordpress integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Messenger integration (coming soon)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("WhatsApp integration (coming soon)")}
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[0]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / {t("month")}
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-30"
                      disabled=""
                      type="button"
                    >
                      {t("Subscribe")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      {t("Standard")}
                    </h2>
                    <div style={{ direction: isRTL ? "rtl" : "ltr" }} className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("10,000 message credits/month")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("5 chatbots")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("11,000,000 characters/chatbot")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Embed on unlimited websites")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Upload multiple files")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("View conversation history")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Capture leads")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("API access")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Zapier integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Slack integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Wordpress integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Messenger integration (coming soon)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("WhatsApp integration (coming soon)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Option to Choose GPT-4")}
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[1]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / {t("month")}
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                      disabled=""
                      type="button"
                    >
                      {t("Subscribe")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 ">
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl leading-6 font-semibold text-black">
                      {t("Unlimited")}
                    </h2>
                    <div style={{ direction: isRTL ? "rtl" : "ltr" }} className="py-4">
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("40,000 message credits/month included (Messages over the limit will use your OpenAI API Key)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("10 chatbots")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("11,000,000 characters/chatbot")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Embed on unlimited websites")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Upload multiple files")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("View conversation history")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Capture leads")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("API access")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Zapier integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Slack integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Wordpress integration")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Messenger integration (coming soon)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("WhatsApp integration (coming soon)")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Option to Choose GPT-4")}
                        </span>
                      </li>
                      <li className="flex space-x-2 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold text-zinc-700">
                          {t("Remove &#x27;Powered by ALAMEEN &#x27;")}
                        </span>
                      </li>
                    </div>
                  </div>
                  <div>
                    <p className="mt-8">
                      <span className="text-3xl font-bold white">{prices[2]}</span>
                      <span className="text-base font-medium text-zinc-900">
                        / {t("month")}
                      </span>
                    </p>
                    <button
                      data-variant="flat"
                      className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full mt-6 bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                      disabled=""
                      type="button"
                    >
                      {t("Subscribe")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-16">
                <h4 className="text-3xl font-extrabold text-black ">{t("Add-ons")}</h4>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 "
                >
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-2xl leading-6 font-semibold text-black">
                          {t("Extra message credits")}
                        </h2>
                      </div>
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }} className=" my-5">
                        <span className=" font-semibold ">
                         {t("$7 per 1000 msg credit s")}
                        </span>
                        <span className="text-base font-medium text-zinc-900">
                          /{t("month")}
                        </span>
                      </p>
                      <div style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex">
                        {t("I want")}
                        <input
                          type="number"
                          step="1000"
                          min="1000"
                          className="min-w-0 p-1 mx-1 px-1 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          value="1000"
                        />
                        {t("extra msg credit s every month")}
                      </div>
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }} className="my-5 text-lg font-bold">
                        {t("Your Total: $7 / month")}
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          {t("Get Add-on")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-2xl leading-6 font-semibold text-black">
                          {t("Extra chatbots")}
                        </h2>
                      </div>
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }} className=" my-5">
                        <span className=" font-semibold ">
                          {t("$7 per 1 chatbot s")}
                        </span>
                        <span className="text-base font-medium text-zinc-900">
                          /{t("month")}
                        </span>
                      </p>
                      <div style={{ direction: isRTL ? "rtl" : "ltr" }} className="flex">
                        {t("I want")}
                        <input
                          type="number"
                          step="1"
                          min="1"
                          className="min-w-0 p-1 mx-1 px-1 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                          value="1"
                        />
                        {t("extra chatbot")}
                      </div>
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }} className="my-5 text-lg font-bold">
                        {t("Your Total: $7 / month")}
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          {t("Get Add-on")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100 min-h-[15rem]">
                    <div className="p-4 flex flex-col justify-between h-full">
                      <h2  className="text-2xl leading-6 font-semibold text-black">
                        {t("Remove &#x27;Powered by ALAMEEN &#x27;")}
                      </h2>
                      <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
                        {t("Remove the ALAMEEN branding from the iframe and widget")}
                      </p>
                      <p className=" text-3xl">
                        <span className=" font-semibold ">$39</span>
                        <span className="text-base font-medium text-zinc-900">
                          /{t("month")}
                        </span>
                      </p>
                      <div className="">
                        <button
                          data-variant="flat"
                          className="Button_root__G_l9X Button_disabled__Ksgjy  block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-10"
                          disabled=""
                          type="button"
                        >
                          {t("Get Add-on")}
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div  className="py-16">
              <h4 className="text-3xl font-extrabold text-black ">
                {t("Pricing FAQs")}
              </h4>
              <ul style={{ direction: isRTL ? "rtl" : "ltr" }}
                role="list"
                className="mt-8 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
              >
                <li>
                  <ul role="list" className="flex flex-col gap-y-8">
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("Is there a free plan?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                       {t("Ans1")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("How do message credits work?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                        {t("Ans2")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("What counts as one chatbot?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                       {t("Ans3")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("How many users can use my chatbot?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                       {t("Ans4")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                       {t(" When are my message credits renewed?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                      {t("Ans5")}
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="flex flex-col gap-y-8">
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                       {t(" How do I know how many characters are in my document?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                        {t("Ans6")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("Can I upload multiple files to one chatbot?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                       {t("Ans7")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("How much data can I give one chatbot?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                        {t("Ans8")}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {t("How does the unlimited plan work?")}
                      </h3>
                      <p className="mt-4 text-slate-700">
                       {t("Ans9")}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
