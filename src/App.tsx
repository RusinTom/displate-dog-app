import styled from 'styled-components'

import { FlexWrapper } from '@/components/common/FlexWrapper'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { FrontPage } from '@/pages/FrontPage'
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
          <FrontPage />
        </Main>
        <Footer msg={'© 2022 All Rights Reserved'} />
      </AppContainer>
    </>
  )
}
