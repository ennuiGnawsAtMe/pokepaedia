'use client'

import { useRouter } from 'next/navigation'

const LuckyDip = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row justify-start">
      <button
        className="rounded-md border-2 bg-slate-50 p-2 text-right font-mono text-sm text-black duration-200 ease-in-out hover:scale-95 hover:bg-slate-100 active:scale-90"
        onClick={() => router.refresh()}
      >
        Next Pokemon &gt;&gt;&gt;
      </button>
    </div>
  )
}

export default LuckyDip
