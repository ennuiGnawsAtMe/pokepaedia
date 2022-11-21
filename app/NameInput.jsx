import { useState } from 'react'

const NameInput = () => {
  const [name, setName] = useState('')

  const changeHandler = e => {
    setName(e)
    console.log(name)
  }

  return (
    <form className="h-20">
      <input
        autoFocus={true}
        maxLength={20}
        className="h-full w-full rounded-md border-black p-4 text-right text-3xl focus:outline-none"
        type="text"
        value={name}
        onChange={e => changeHandler(e.target.value)}
      />
    </form>
  )
}

export default NameInput
