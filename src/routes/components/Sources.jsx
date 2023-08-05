import React, {useRef,useState} from 'react'

export default function Sources() {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
      const newFiles = event.target.files;
      // Append the new files to the existing selectedFiles state
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    };
  
    const handleFileDelete = (fileIndex) => {
      // Remove the file at the specified index from the selectedFiles state
      setSelectedFiles((prevFiles) =>
        prevFiles.filter((_, index) => index !== fileIndex)
      );
    };
    const handleFileClick = () => {
      fileInputRef.current.click(); // Trigger click on the hidden input element
    };
  return (
    <div>
        <div className="max-w-md m-auto">
                    <div>
                      <label
                        htmlFor=""
                        className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload Files
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
                              Drag & drop files here, or click to select files
                            </p>
                            <span
                              id="file_type_help"
                              className="text-xs text-gray-500 dark:text-gray-300"
                            >
                              Supported File Types: .pdf, .doc, .docx, .txt
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300">
                        NOTE: Uploading a PDF using safari doesn't work, we're
                        looking into the issue. Make sure the text is OCR'd,
                        i.e. you can copy it.
                      </p>
                      <div className="pt-8">
                        {selectedFiles.length > 0 && (
                          <div>
                            <p className="font-semibold pb-2">
                              Attached Files
                              <span className="text-zinc-500 text-sm ml-1">
                                (236 chars)
                              </span>
                            </p>
                            {selectedFiles.map((file, index) => (
                              <>
                                <div className="grid grid-cols-10 pb-4">
                                  <div key={index} className="col-span-9">
                                    <span className="break-words">
                                      {file.name}{" "}
                                    </span>
                                    <span className="text-zinc-500 text-sm">
                                      {" "}
                                      (236 chars)
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-end">
                                    <button
                                      onClick={() => handleFileDelete(index)}
                                    >
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
    </div>
  )
}
