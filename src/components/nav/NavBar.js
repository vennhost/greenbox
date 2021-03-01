import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    userClick: false,
  };

  onUserClick = () => {
    this.setState({ userClick: true });
  };
  render() {
    return (
      <>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <nav className="bg-green-900">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/*  <!-- Mobile menu button--> */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/*   <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  {/*  <!-- Icon when menu is open. -->
          <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/*  <!-- Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" -->
                     */}
                    <Link
                      to="#"
                      className="bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium border border-green-100"
                    >
                      Welcome Olusanya
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center justify-center mx-auto inset-y-0 right-5">
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={this.goHome}
                  className="mr-3 bg-green-800 p-1 rounded-full text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                >
                  <span className="sr-only">Go Home</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </button>

                <button
                  onClick={this.notifications}
                  className="bg-green-800 p-1 rounded-full text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  {/*  <!-- Heroicon name: outline/bell --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/*  <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => this.setState({ userClick: true })}
                      onDoubleClick={() => this.setState({ userClick: false })}
                      className="bg-green-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      {localStorage.getItem("token") ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      ) : (
                        <div>
                          <span className="sr-only">Login</span>
                          <svg
                            className="h-8 w-8 text-green-400 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  </div>
                  {/*  <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                  {this.state.userClick == true ? (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      {localStorage.getItem("token") ? (
                        <div>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                            role="menuitem"
                          >
                            Your Profile
                          </Link>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                            role="menuitem"
                          >
                            Settings
                          </Link>
                          <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                            role="menuitem"
                          >
                            Sign out
                          </Link>{" "}
                        </div>
                      ) : (
                        <div>
                          <Link
                            to="/auth/login"
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                            role="menuitem"
                          >
                            Sign In
                          </Link>
                          <Link
                            to="/auth/register"
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                            role="menuitem"
                          >
                            Register
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/*   <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/*  <!-- Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" --> */}
              <Link
                to="#"
                className="bg-green-900 text-white block px-3 py-2 rounded-md text-base font-medium border border-green-100"
              >
                Welcome Olusanya
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
