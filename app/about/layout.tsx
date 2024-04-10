import React, { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex-1 max-w-6xl'>
        {children}
    </div>
  )
}
