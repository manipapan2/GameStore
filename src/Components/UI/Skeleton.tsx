import React from 'react';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-800 w-fit h-fit dark:bg-neutral-800 ${className || ''}`}
      {...props}
    />
  );
}

