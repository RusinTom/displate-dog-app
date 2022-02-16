import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

const DogImage = styled(motion.div)`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-height: 100%;
  }
`

export const Image = ({ url }: { url: string }) => {
  const [imageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
  }

  return (
    <DogImage
      exit={{ opacity: 0 }}
      animate={{ opacity: imageLoading ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <img key={url} alt="" src={url} onLoad={imageLoaded} />
    </DogImage>
  )
}
