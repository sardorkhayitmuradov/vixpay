import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('../public/assets/images/dots.png')] bg-no-repeat bg-right-top">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
