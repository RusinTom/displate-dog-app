import React from 'react'

interface FooterProps {
  msg: string
}

const Footer = ({ msg }: FooterProps) => {
  return <footer>{msg}</footer>
}

export default Footer
