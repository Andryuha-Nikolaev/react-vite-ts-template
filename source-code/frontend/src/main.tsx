import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./shared/styles/index.scss";
import "simplebar-react/dist/simplebar.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";

// import "swiper/css";
// import "swiper/css/pagination";

import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
