import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Button className="group hover:bg-[#A2EE2F]/80 hover:text-[#064420]
     bg-[#064420] text-[#FFECB3] font-semibold uppercase 
      tracking-wide rounded-full px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-base cursor-pointer">
      View Work
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  )
}
