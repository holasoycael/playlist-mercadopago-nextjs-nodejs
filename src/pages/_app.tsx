import Script from 'next/script'
import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
