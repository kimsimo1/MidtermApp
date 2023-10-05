// note from Ethan: import '@/' not working properly in replit workspaces



import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
return (
<ChakraProvider>
<Component {...pageProps} />
</ChakraProvider>
);
}
export default MyApp;









