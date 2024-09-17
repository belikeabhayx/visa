// src/components/Image.tsx
import React from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const Image = ({ src, alt, width, height }: ImageProps) => (
  <img src={src} alt={alt} width={width} height={height} />
)

export default Image
