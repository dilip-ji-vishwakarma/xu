import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type HeadingProps = {
    children: ReactNode;
    className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        className={cn(
          "relative inline-block md:text-[40px] text-[18px] font-semibold leading-[48.41px] tracking-[4px] text-center",
          className
        )}
      >
        {children}
        <span className="absolute left-0 md:bottom-[2px] bottom-[13px] md:h-[25px] h-[12px] w-full bg-[#FFD553] -z-10"></span>
      </h2>
    </div>
  );
};
