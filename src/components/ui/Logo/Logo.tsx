import React from 'react'
import Image from 'next/image';

type LogoProps = {
  width?: number,
  height?: number,
}

const Logo = ({
  width = 48,
  height = 48
}: LogoProps) => {
  return (
    <Image src='/images/zephyrLogo.png' alt="ZephyrTalk logo" width={width} height={height} />
  )
}

export default Logo