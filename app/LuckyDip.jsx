'use client'

import { useRouter } from 'next/navigation'

const LuckyDip = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row justify-start">
      <button
        className="rounded-md  bg-lime-500 p-2 text-right font-mono text-base text-white shadow-lg shadow-slate-400 hover:scale-95 active:scale-90"
        onClick={() => router.refresh()}
      >
        Lucky Dip!
      </button>
    </div>
  )
}

export default LuckyDip
