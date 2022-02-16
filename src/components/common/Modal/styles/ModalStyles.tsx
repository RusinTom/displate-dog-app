import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ModalWindow = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`

export const Content = styled(motion.div)`
  width: 50rem;
  max-width: 95vw;
  border-radius: 8px;
  box-shadow: 0 16px 32px rgb(180 180 180 / 40%);
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 50rem;
  max-height: 95vh;
`

export const Header = styled.div`
  padding: 1.5rem;
`

export const Title = styled.h3`
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`

export const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  flex: 1;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`
