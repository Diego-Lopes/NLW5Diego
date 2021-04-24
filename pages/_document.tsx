import Document, {Html, Head, Main, NextScript} from 'next/document';
//definindo as tag que receberão a fonto.
export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          {/* inporta tudo que eu quero. */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
        </Head>        
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }

}
