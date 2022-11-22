import NameInput from './NameInput'

export default async function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className=" flex h-[500px] w-[800px] flex-col justify-evenly space-y-10 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-2xl shadow-slate-400 ">
        <div className="flex flex-col text-center  text-white">
          <h1 className="pb-5 font-mono text-7xl">Hey Trainer!</h1>
          <h2 className="font-mono text-3xl">What&#39;s your name?</h2>
        </div>
        <NameInput />
      </div>
    </div>
  )
}
