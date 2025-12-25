"use client";
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='text-white flex justify-between items-center p-3'>
      <Link href="/"><div className='logo text-xl flex items-center gap-2 font-bold'><img src="Logo.png" width={42} height={42} alt="" />Mujhe Funds Do</div></Link>

      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className="relative">
        {session && (
          <div>
            <button
              id="dropdownInformationButton"
              onClick={() => {
                const dropdown = document.getElementById('dropdownInformation');
                dropdown?.classList.toggle('hidden');
              }}
              className="inline-flex items-center justify-center text-white bg-[#3f465f] hover:bg-[#4c5572] focus:ring-4 focus:ring-[#4285F4]/50 focus:outline-none font-medium leading-5 rounded-4xl text-sm px-4 py-2.5"
              type="button">
              Menu
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div id="dropdownInformation" className="z-50 hidden absolute right-0 mt-2 bg-[#2a2f3f] border border-[#3f465f] rounded-lg shadow-lg w-72">
              <div className="p-3 border-b border-[#3f465f]">
                <div className="text-sm">
                  <div className="text-gray-400">{session.user.email}</div>
                </div>
              </div>
              <ul className="px-2 py-2 text-sm text-gray-300 font-medium">
                <li>
                  <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-[#3f465f] hover:text-white rounded">
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-[#3f465f] hover:text-white rounded">
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                    </svg>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button className="inline-flex items-center w-full p-2 hover:bg-[#3f465f] hover:text-white rounded">
                    <svg
                      className="w-4 h-4 me-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3V3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v4h-7V3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h7v11h-7V10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h7v7H3v-7z" />
                    </svg>
                    Settings
                  </button>
                </li>

                <li>
                  <button className="inline-flex items-center w-full p-2 hover:bg-[#3f465f] hover:text-white rounded">
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                    </svg>
                    Notifications
                  </button>
                </li>
                <li className="border-t border-[#3f465f] pt-1.5">
                  <button
                    onClick={() => signOut()}
                    className="inline-flex items-center w-full p-2 text-red-400 hover:bg-[#3f465f] rounded">
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                    </svg>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!session && <Link href="/login">
          <button type="button" className="text-white gap-2 cursor-pointer bg-[#3f465f] hover:bg-[#4c5572] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 box-border border border-transparent font-medium leading-5 rounded-4xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
            Sign in
          </button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
