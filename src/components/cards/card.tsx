'use client'

import React, { JSX } from 'react'

export const Card = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center mb-24">
      <div className="inline-flex items-start relative">
        <div className="bg-[#f1f4ff] inline-flex flex-col items-center gap-5 px-[53px] py-[50px] relative flex-[0_0_auto]">
          <img className="relative w-10 h-10" alt="User check" src="user-check.svg" />
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Alef-Regular',Helvetica] font-normal text-primary text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
              Expert Guidance
            </div>
            <p className="relative w-[274px] font-body-2 font-[number:var(--body-2-font-weight)] text-text text-[length:var(--body-2-font-size)] text-center tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
              Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
            </p>
          </div>
        </div>

        <div className="bg-[#0d132e] border-b-8 [border-bottom-style:solid] border-[#3650be] inline-flex flex-col items-center gap-5 px-[53px] py-[50px] relative flex-[0_0_auto]">
          <img className="relative w-10 h-10" alt="Send" src="send.svg" />
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Alef-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
              Tailored Solutions
            </div>
            <p className="relative w-[274px] font-body-2 font-[number:var(--body-2-font-weight)] text-light-gray text-[length:var(--body-2-font-size)] text-center tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
              Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
            </p>
          </div>
        </div>
        <div className="bg-[#f1f4ff] inline-flex flex-col items-center gap-5 px-[53px] py-[50px] relative flex-[0_0_auto]">
          <img className="relative w-10 h-10" alt="Thumbs up" src="thumbs-up.svg" />
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Alef-Regular',Helvetica] font-normal text-primary text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
              Streamlined Process
            </div>
            <p className="relative w-[274px] font-body-2 font-[number:var(--body-2-font-weight)] text-text text-[length:var(--body-2-font-size)] text-center tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
              Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
