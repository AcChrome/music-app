import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="">
        <Sidebar />
        <Center />
        {/* center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export default Home
