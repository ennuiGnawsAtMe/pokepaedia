const Nav = () => {
  return (
    <nav className="flex">
      <ul className="flex cursor-pointer list-none flex-row p-4  font-sans text-lg text-white ">
        <li className="hover:text-bold p-4 hover:text-lime-400">Name</li>
        <li className=" p-4 hover:text-lime-400 active:overline">Type</li>
        <li className="p-4 hover:text-lime-400 ">Colour</li>
        <li className="p-4 hover:text-lime-400">Ability</li>
        <li className="p-4 hover:text-lime-400">Ranking</li>
        <li className="p-4 hover:text-lime-400">Status</li>
        <li className="p-4 hover:text-lime-400">Shape</li>
        <li className="p-4 hover:text-lime-400">Habitat</li>
      </ul>
    </nav>
  )
}

export default Nav
