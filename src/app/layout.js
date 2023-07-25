import { Navbar } from "@/components/navbar/navbar";
import "./globals.scss";
import {
	Poppins,
	Josefin_Sans,
	Cormorant_Garamond,
	Nunito_Sans,
} from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";
import { cookies } from "next/headers";

const poppins = Poppins({
	weight: ["300"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const josefin_Sans = Josefin_Sans({
	weight: ["300"],
	subsets: ["latin"],
	variable: "--font-josefin",
	display: "swap",
});

const cormorant_Garamond = Cormorant_Garamond({
	weight: ["300"],
	subsets: ["latin"],
	variable: "--font-cormorant",
	display: "swap",
});

const nunito_Sans = Nunito_Sans({
	weight: ["200"],
	subsets: ["latin"],
	variable: "--font-nunito",
	display: "swap",
});

export const metadata = {
	title: "Mart",
	description: "marktplace for freelancers and multivendors",
};

export default function RootLayout({ children }) {
	const cookieStore = cookies();
	const mode = cookieStore.get("darkMode");

	let darkMode = false;

	if (mode) {
		if (mode.value === "true") {
			darkMode = true;
		}
	}

	return (
		<html
			lang="en"
			className={`
				${poppins.variable} 
				${cormorant_Garamond.variable}  
				${nunito_Sans.variable}  
				${josefin_Sans.variable}`}
		>
			<body>
				<ThemeProvider serverDarkMode={darkMode}>
					<Navbar />
					<div>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
