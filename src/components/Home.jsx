import NavBar from "./NavBar"

const Home = function () {
  return (
    <div className="flex-grow-1 bg-black text-light overflow-auto">
        <NavBar />
      <div className="p-4">
      Home
      </div>
    </div>
  )
}

export default Home
