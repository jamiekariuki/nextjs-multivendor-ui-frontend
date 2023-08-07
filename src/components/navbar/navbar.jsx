"use client";
import React from "react";
import "./navbar.scss";
import { useState } from "react";
import { CartBadge, NotificationBadge, MessageBadge } from "./badge/badge";
import { DropDown } from "./dropdown nav/dropdown";
//import MainMenu from "./menu/menu";
import { TfiSearch } from "react-icons/tfi";
import { AccountSettings } from "./account settings/account.settings";
import { SlMenu } from "react-icons/sl";
import { SideBar } from "./side bar/side.bar";

export const Navbar = () => {
	const [user, setuser] = useState(!false);

	const [sideBar, setSideBar] = useState(false);

	return (
		<nav>
			<SideBar sideBar={sideBar} setSideBar={setSideBar} />
			<div
				className={
					sideBar
						? "side-bar-background side-bar-background-open"
						: "side-bar-background"
				}
				onClick={() => {
					setSideBar(!sideBar);
				}}
			/>
			<div className="container">
				<div className="left">
					<div
						className="mobile-nav"
						onClick={() => {
							setSideBar(!sideBar);
						}}
					>
						<SlMenu className="menu-icon" />
					</div>
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
							<button className="login">
								<p>login</p>
							</button>
							<button className="signup">
								<p>sign up</p>
							</button>
						</div>
					) : (
						<div className="profile-container">
							<div className="badges">
								<MessageBadge />
							</div>
							<div className="badges">
								<NotificationBadge />
							</div>
							<AccountSettings />
						</div>
					)}

					{/* <MainMenu /> */}
				</div>
			</div>
			<DropDown />
		</nav>
	);
};
