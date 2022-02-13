import HelloWorld from '@/components/HelloWorld/HelloWorld'
import GlobalStyle from '@/styles/GlobalStyle'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header title={'Dog App'} />
      <main>
        <HelloWorld msg="Boilerplate" />
      </main>
      <Footer msg={'© 2022 All Rights Reserved'} />
    </>
  )
}
