import { BrowserRouter, Route, Routes } from "react-router";

import RootLayout from "./Layout";

import "@/shared/styles/index.scss";

import { HomePage } from "@/pages/home";
import { TestPage } from "@/pages/test";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route path="test" element={<TestPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
