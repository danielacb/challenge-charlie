import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

import { Ubuntu } from "@next/font/google";
const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <main className={ubuntu.className}>
                <GlobalStyles />
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}
