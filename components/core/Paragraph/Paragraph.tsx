import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type ParagraphProps = {
    children: ReactNode;
    className?: string;
};

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p
        className={cn(
          "md:text-[24px] text-[18px] font-normal leading-[46px] text-center ",
          className
        )}
      >
        {children}
      </p>
  )
}
