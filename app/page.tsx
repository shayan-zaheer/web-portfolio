import Smiley from "@/components/smiley"

function page() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">Who's watching?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
          <Smiley section="About" />
          <Smiley section="About" />
          <Smiley section="About" />
          <Smiley section="About" />
      </div>
    </div>
  )
}

export default page