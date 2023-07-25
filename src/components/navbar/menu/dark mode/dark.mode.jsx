import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./dark.mode.scss";
import { ThemeContext } from "@/context/themeContext";

export const Mode = () => {
	const { toggle, darkMode } = useContext(ThemeContext);

	return (
		<div className="mode" onClick={toggle}>
			{!darkMode ? (
				<div className="dark">
					<DarkModeIcon className="dark-icon" />
					<p>Dark mode</p>
				</div>
			) : (
				<div className="light">
					<LightModeIcon className="light-icon" />
					<p>light mode</p>
				</div>
			)}
		</div>
	);
};
