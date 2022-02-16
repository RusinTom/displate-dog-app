import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components'

import { FlexWrapper } from '@/components/common/FlexWrapper/FlexWrapper'
import { Footer } from '@/layouts/Footer/Footer'
import { Header } from '@/layouts/Header/Header'
import { Main } from '@/layouts/Main/Main'
import { FrontPage } from '@/pages/FrontPage/FrontPage'
import GlobalStyle from '@/styles/GlobalStyle'

const AppContainer = styled(FlexWrapper)`
  min-height: 100vh;
`

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppContainer flexDirection="column" justifyContent="space-between">
        <Header title={'Dog App'} />
        <Main>
          <FrontPage />
        </Main>
        <Footer msg={'© 2022 All Rights Reserved'} />
      </AppContainer>
    </QueryClientProvider>
  )
}
