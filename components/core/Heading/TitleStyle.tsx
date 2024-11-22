import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

type TitleStyleProps = {
    children: ReactNode;
    className?: string;
};

export const TitleStyle = ({children, className}: TitleStyleProps) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        className={cn(
          "md:text-[50px] text-[18px] font-semibold leading-[50px] tracking-wider",
          className
        )}
      >
        {children}
      </h2>
    </div>
  )
}
