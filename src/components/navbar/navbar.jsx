"use client";
import React from "react";
import "./navbar.scss";
import { useState } from "react";
import { CartBadge, NotificationBadge, MessageBadge } from "./badge/badge";
import { Float } from "./floating nav/float";
import MainMenu from "./menu/menu";
import { TfiSearch } from "react-icons/tfi";
import { AccountSettings } from "./account settings/account.settings";

export const Navbar = () => {
	const [user, setuser] = useState(false);

	return (
		<nav>
			<div className="container">
				<div className="left">
					<div className="logo">
						<h1>mart</h1>
					</div>
					<div className="nav-links"></div>
				</div>
				<div className="middle">
					<div className="search">
						<input
							type="text"
							className="search__input"
							placeholder="Search..."
						/>
						<button className="search__button">
							<TfiSearch className="search__icon" />
						</button>
					</div>
				</div>
				<div className="right">
					<CartBadge />

					{user ? (
						<div className="user-links">
							<button className="login">login</button>
							<button className="signup">sign up</button>
						</div>
					) : (
						<div className="profile-container">
							<MessageBadge />
							<NotificationBadge />
							<AccountSettings />
						</div>
					)}

					<MainMenu />
				</div>
			</div>
			<Float />
		</nav>
	);
};
