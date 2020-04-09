import React from 'react'

export default () => (
  <div>
    <nav class="flex flex-column md-flex-row bg-gray-darkest px-4">
      <div class="flex justify-between">
        <a href="#" class="flex items-center p-2 mr-4">
          <img class="max-h-l3 w-auto" src="/assets/images/logo-dark.png" />
        </a>
        <a
          data-toggle="toggle-nav"
          data-target="#nav-items"
          href="#"
          class="flex items-center ml-auto md-hidden opacity-70"
        >
          <div class="m-3 br-4 border-gray-lighter p-1">
            <div class="border-t border-gray-lighter my-1 px-3"></div>
            <div class="border-t border-gray-lighter my-1"></div>
            <div class="border-t border-gray-lighter my-1"></div>
          </div>
        </a>
      </div>
      <div
        id="nav-items"
        class="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-start items-center"
      >
        <a
          href="#"
          class="fs-s1 mx-3 py-3 gray-lighter no-underline hover-underline"
        >
          Home
        </a>
        <a
          href="#"
          class="fs-s1 mx-3 py-3 gray-lighter no-underline hover-underline"
        >
          Features
        </a>
        <a
          href="#"
          class="fs-s1 mx-3 py-3 gray-lighter no-underline hover-underline"
        >
          Pricing
        </a>
        <a
          href="#"
          class="fs-s1 mx-3 py-3 gray-lighter no-underline hover-underline"
        >
          Contact
        </a>
      </div>
    </nav>
  </div>
)
