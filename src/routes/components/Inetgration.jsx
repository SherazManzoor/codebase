import React from "react";
import { useTranslation } from "react-i18next";

export default function Inetgration() {
    const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  return (
    <div>
      <div class="mt-5 flex flex-col justify-center items-center w-full">
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Slack"
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   hover:bg-zinc-100"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <title>Slack Logo SVG</title>
                    <path
                      d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                      fill="#36C5F0"
                    ></path>
                    <path
                      d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                      fill="#2EB67D"
                    ></path>
                    <path
                      d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                      fill="#ECB22E"
                    ></path>
                    <path
                      d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                      fill="#E01E5A"
                    ></path>
                  </svg>
                </div>
                <p style={{ direction: isRTL ? "rtl" : "ltr" }} class="sm:text-sm text-xs text-left ">
                  {t("Add to Slack workspace")}
                </p>
              </div>
              <a
                class="text-zinc-600 text-xs ml-4 hover:underline"
                href="/pricing"
              >
                {t("Subscription required")}
              </a>
            </div>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="rgb(29, 78, 216)"
              class="w-8 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Messenger"
            disabled=""
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   cursor-not-allowed text-zinc-600"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    id="IconChangeColor"
                  >
                    <path
                      d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
                      id="mainIconPathAttribute"
                      fill="#52525B"
                      stroke-width="0"
                      stroke="#ff0000"
                    ></path>
                  </svg>
                </div>
                <p class="sm:text-sm text-xs text-left " style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("Add to Messenger")}</p>
              </div>
              <span class="text-zinc-600 text-xs ml-4">{t("Coming Soon")}</span>
            </div>
          </button>
          <div class="w-8 h-6"></div>
        </div>
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Zapier"
            disabled=""
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   cursor-not-allowed text-zinc-600"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#52525B"
                  >
                    <title>Zapier</title>
                    <path d="M15 12.004c0 .893-.165 1.746-.461 2.535-.787.297-1.643.461-2.535.461h-.009c-.893 0-1.745-.165-2.534-.461C9.164 13.75 9 12.896 9 12.004v-.009c0-.893.164-1.745.461-2.534C10.25 9.164 11.103 9 11.995 9h.009c.893 0 1.748.164 2.535.462.297.788.461 1.641.461 2.535v.007zM23.835 10H16.83l4.948-4.952c-.39-.548-.82-1.06-1.295-1.533-.473-.474-.985-.907-1.53-1.296l-4.954 4.949V.165C13.35.061 12.686 0 12.004 0h-.01c-.68 0-1.346.061-1.995.165V7.17l-4.95-4.949c-.549.386-1.06.821-1.534 1.294-.474.474-.908.987-1.296 1.533L7.168 10H.165S0 11.316 0 11.995v.009c0 .68.061 1.348.165 1.995H7.17l-4.949 4.952c.777 1.096 1.733 2.051 2.827 2.83L10 16.831v7.004c.648.105 1.313.165 1.991.165h.017c.679 0 1.344-.06 1.991-.165v-7.004l4.952 4.95c.548-.375 1.06-.812 1.529-1.29h.005c.473-.465.906-.976 1.296-1.531l-4.95-4.949h7.004c.105-.645.165-1.304.165-1.98V12c0-.678-.06-1.343-.165-1.99"></path>
                  </svg>
                </div>
                <p class="sm:text-sm text-xs text-left " style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("Add to Zapier")}</p>
              </div>
              <span class="text-zinc-600 text-xs ml-4">{t("Coming Soon")}</span>
            </div>
          </button>
          <div class="w-8 h-6"></div>
        </div>
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Wordpress"
            disabled=""
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   cursor-not-allowed text-zinc-600"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#52525B"
                    class="bi bi-wordpress"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"></path>
                    <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"
                    ></path>
                  </svg>
                </div>
                <p class="sm:text-sm text-xs text-left " style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("Add to Wordpress")}</p>
              </div>
              <span class="text-zinc-600 text-xs ml-4">{t("Coming Soon")}</span>
            </div>
          </button>
          <div class="w-8 h-6"></div>
        </div>
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Shopify"
            disabled=""
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   cursor-not-allowed text-zinc-600"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    viewBox="-18 0 292 292"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
                        fill="#52525B"
                      ></path>
                      <path
                        d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
                        fill="#52525B"
                      ></path>
                      <path
                        d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="sm:text-sm text-xs text-left " style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("Add to Shopify")}</p>
              </div>
              <span class="text-zinc-600 text-xs ml-4">{t("Coming Soon")}</span>
            </div>
          </button>
          <div class="w-8 h-6"></div>
        </div>
        <div class="w-full flex justify-center items-center mb-4">
          <button
            aria-label="Whatsapp"
            disabled=""
            class="md:w-3/6 w-5/6 bg-white border px-5 py-3  rounded-2xl flex items-center   cursor-not-allowed text-zinc-600"
          >
            <div class=" w-full flex justify-between items-center">
              <div class="flex items-center">
                <div class="sm:w-8 md:w-8 w-5 mr-7">
                  <svg
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>whatsapp [#128]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-300.000000, -7599.000000)"
                          fill="#52525B"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                              id="whatsapp-[#128]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <p class="sm:text-sm text-xs text-left " style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("Add to Whatsapp")}</p>
              </div>
              <span class="text-zinc-600 text-xs ml-4">{t("Coming Soon")}</span>
            </div>
          </button>
          <div class="w-8 h-6"></div>
        </div>
      </div>
    </div>
  );
}
