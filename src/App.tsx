import styled from 'styled-components'

import { FlexWrapper } from '@/components/common/FlexWrapper'
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import GlobalStyle from '@/styles/GlobalStyle'

const AppContainer = styled(FlexWrapper)`
  min-height: 100vh;
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer flexDirection="column" justifyContent="space-between">
        <Header title={'Dog App'} />
        <Main>
          <HelloWorld msg="Boilerplate" />
        </Main>
        <Footer msg={'© 2022 All Rights Reserved'} />
      </AppContainer>
    </>
  )
}
