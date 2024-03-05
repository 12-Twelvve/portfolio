'use client'

import NameDiv from '../components/NameDiv'

import React, { useState } from 'react';


export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log success message
        // Handle success, show a confirmation message, etc.
      } else {
        // Handle error response
        console.error('Client : failed to send email:', response.statusText);
      }
    } catch (error) {
      console.error('Client : error sending email:', error);
    }
  };


  return (
    <div className="px-12 py-1  h-[85vh]">
    <div className="gap-5 flex max-md:flex-col  md:flex-row lg:flex-row xl:flex-row  max-md:gap-0">
      {/* left side name panel bar */}
      <div className="w-full md:w-3/5 max-md:w-full max-md:mt-10  mt-5  md:min-h-[80vh] md:max-h-[80vh]"> 
        <div className="flex flex-col max-md:max-w-full">
          {/* Name Div top */}
          <NameDiv/>

          {/* left bottom panel */}
          <div className="bg-neutral-950 flex flex-col rounded-3xl md:flex-row mt-5 pl-7 pr-7 pt-1 pb-1 gap-5  min-h-[45vh] max-h-[45vh] max-md:min-h-[50vh] max-md:max-h-[50vh]">
            {/* <div className={`text-white font-bold h-0.5 mt-5 sm:text-sm lg:text-lg `}>
            </div> */}
            <div class="w-full text-center sm:p-8">
                <p class="text-base text-white sm:text-lg ">Kathmandu, Nepal  </p>
                <p class="text-base text-white sm:text-lg ">+977-9863658976</p>
                <p class="text-base text-white sm:text-lg ">koobear99@gmail.com</p>
                <div class=" max-sm:w-[90%] items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    
                    <a href="https://www.facebook.com/twelvve.nepo/" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-bggrayarc dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg class="me-3 w-7 h-7" aria-hidden="true" 
                            focusable="false" data-prefix="fab" data-icon="facebook"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                          <path data-name="layer1"
                          d="M39.8 12.2H48V0h-9.7C26.6.5 24.2 7.1 24 14v6.1h-8V32h8v32h12V32h9.9l1.9-11.9H36v-3.7a3.962 3.962 0 0 1 3.8-4.2z"
                          fill="#ffffff"></path>
                        </svg>
                      <div class="text-left rtl:text-right">
                              <div class="-mt-1 font-sans text-sm font-semibold">Facebook</div>
                          </div>
                    </a>
                    <a href="https://github.com/12-Twelvve" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-bggrayarc dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="me-3 w-7 h-7" aria-hidden="true" 
                            focusable="false" data-prefix="fab" data-icon="github"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                        aria-describedby="desc" role="img">
                          <title>Github</title>
                          <desc>A solid styled icon from Orion Icon Library.</desc>
                          <path data-name="layer2"
                          d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                          fill="#ffffff"></path>
                        </svg>
                        <div class="text-left rtl:text-right">
                            <div class="-mt-1 font-sans text-sm font-semibold">Github</div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/kuber-budhathoki-4866b61b9/" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-bggrayarc dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="me-3 w-7 h-7" aria-hidden="true" 
                            focusable="false" data-prefix="fab" data-icon="github"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                        aria-describedby="desc" role="img">
                          <title>Github</title>
                          <desc>A solid styled icon from Orion Icon Library.</desc>
                          <path data-name="layer2"
                         d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z" fill="#ffffff"></path>
                        </svg>
                        <div class="text-left rtl:text-right">
                            <div class="-mt-1 font-sans text-sm font-semibold">LinkedIn</div>
                        </div>
                    </a>
                </div>
                
            </div>

          </div>
        </div>
      </div>
      {/* right side panel */}
      <div className="bg-neutral-950 max-sm:h-[60vh] w-full md:w-2/5 mt-5 pt-6 rounded-3xl ">
        <div className='text-center pl-5 pr-5'>
          <div className={`mt-10 text-white font-sans h-0.5  sm:text-sm lg:text-25xl`}>
            Hi, How Can I Help You?
          </div>
          <div className="mt-10 font-sans sm:text-sm lg:text-30xl">
          Fall In <span className='text-red font-bold'>LOVE</span>  With Me?
          </div>
          <div className="mt-2">
            It@apos;s $12 per hour.
          </div>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} class=" max-w-sm max-sm:ps-10 mx-auto mt-10 flex flex-col gap-7">
        <div class="relative block">
          <span class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
          </span> 
          <input type="text" id="person_name" name="name" value={formData.name} onChange={handleChange}
            class="block w-[85%] max-sm:w-[70%] ps-10 p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-bggrayarc dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Your Beautiful Name"/>
        </div>
        <div class="relative block">
          <span class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </span>
          <input type="text" id="email-address-icon" name="email" value={formData.email} onChange={handleChange}
            class="block w-[85%] max-sm:w-[70%] ps-10 p-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-bggrayarc dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="your@email.address"/>
        </div>
        <div className='block'>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" 
          class="block w-[85%] max-sm:w-[70%] p-3 pr-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-bggrayarc dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Leave your thoughts..."></textarea>
        </div>

        <div className='flex justify-center'>
        <button type="submit" class="bg-gray-500 rounded-md bg-gray-100 px-3 py-2 text-sm 
                font-semibold text-white hover:bg-bggrayarc border-gray-300">
          Submit</button>
        </div>  
      </form>
      </div>
    </div> 
    </div>
  )  
  }
  