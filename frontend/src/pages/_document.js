import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" >
      <Head >
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
