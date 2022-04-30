import React from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Center() {
  const { date: session } = useSession()
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header>
        <div className="flex items-center space-x-3 bg-black opacity-90 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}:</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  )
}
