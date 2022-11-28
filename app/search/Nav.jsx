const Nav = () => {
  return (
    <nav className="flex">
      <ul className="flex cursor-pointer list-none flex-row p-2  font-sans text-base text-white ">
        <li className="p-4 hover:text-lime-400 hover:overline">Name</li>
        <li className=" p-4 hover:text-lime-400 hover:overline">Type</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Colour</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Ability</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Ranking</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Status</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Shape</li>
        <li className="p-4 hover:text-lime-400 hover:overline">Habitat</li>
      </ul>
    </nav>
  )
}

export default Nav
