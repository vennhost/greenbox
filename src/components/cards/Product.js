import React, { Component } from "react";
import cocoaImage from "../../static-images/cocoa.jpg";

class Product extends Component {
  state = {};
  render() {
    return (
      <>
        <body class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
          <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src={cocoaImage}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Verified{" "}
                      <svg
                        className="h-8 w-8 text-green-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h2 class="mt-2 mb-2  font-bold">
                      30 Tonnes of Dry Cocoa Beans
                    </h2>

                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Price/Ton:</span>
                      &nbsp;
                      <span class="font-bold text-xl">45,00</span>&nbsp;
                      <span class="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3
                      Tage
                    </span>
                    <span class="flex items-center">
                      <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div class="p-4 flex items-center text-sm text-gray-600">
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Request Quotation
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Product;
