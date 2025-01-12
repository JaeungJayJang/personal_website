import React from "react";
import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/layout/header'
import Footer from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: `${"Jaeung Jang's Personal Website"}`,
	description: `${"Welcome to Jaeung Jang's personal website"}`,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="">
			<body className={` ${inter.className}`}>
				<Header />
				{children}
				{/* <div className="flex flex-col overflow-hidden">
				</div> */}
				<Footer />
			</body>
		</html>
	)
}
