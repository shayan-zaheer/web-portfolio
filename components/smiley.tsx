function Smiley({section}: {section: string}) {
  return (
    <div>
        <img src="yellow.jpg" className="w-36 h-36 mb-4" alt="" />
        <p className="text-center text-[#5f5957] shadow-lg">{section}</p>
    </div>
  )
}

export default Smiley;