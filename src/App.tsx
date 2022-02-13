import HelloWorld from '@/components/HelloWorld/HelloWorld'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import GlobalStyle from '@/styles/GlobalStyle'

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
