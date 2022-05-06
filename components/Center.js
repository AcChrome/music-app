import React from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Center() {
  const { date: session } = useSession()
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header className="absolute top-5 right-8">
        <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 opacity-90 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}:</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`from-red=500 padding-8 flex h-80 items-end space-x-7 bg-gradient-to-b to-black text-white`}
      >
        <img src="" alt="" />
        <h1>hello</h1>
      </section>
    </div>
  )
}
