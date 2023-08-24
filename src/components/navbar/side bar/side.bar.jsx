"use client";
import React, { useEffect, useState } from "react";
import "./side.bar.scss";
import {
	MessageBadge,
	NotificationBadge,
	EscrowBadge,
	OrderBadge,
} from "../badge/badge";
import { Platform } from "./accordion/accordion";
import { IoSettingsSharp } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsArrowLeftCircle } from "react-icons/bs";
import UserSideBar from "./user side bar/user.side.bar";
import { PageNav } from "./page nav/page.nav";
import { DarkMode } from "../dark mode/dark.mode";

export const SideBar = ({ sideBar, handleSidebarToggle }) => {
	const [user, setuser] = useState(false);
	const [page, setpage] = useState(false);

	useEffect(() => {
		document.body.style.overflow = sideBar ? "hidden" : "auto";
	}, [sideBar]);

	return (
		<div
			className={
				sideBar
					? "side-bar-container side-bar-open"
					: "side-bar-container"
			}
		>
			<div className="side-bar-title">
				<div className="side-bar-logo">
					<h1>mart</h1>
				</div>
				<div className="side-bar-toggle" onClick={handleSidebarToggle}>
					<BsArrowLeftCircle className="close-icon" />
				</div>
			</div>
			<div className="side-bar-wrapper">
				<div className="side-bar-user-wrapper">
					{user ? (
						<div className="side-bar-user-links">
							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Log in</h6>
							</div>

							<div
								className="user-btn"
								onClick={() => {
									setuser(!user);
								}}
							>
								<h6>Sign up</h6>
							</div>
							<PageNav />
						</div>
					) : (
						<div className="side-bar-profile">
							<UserSideBar
								page={page}
								setpage={setpage}
								user={user}
								setuser={setuser}
							/>

							<PageNav
								handleSidebarToggle={handleSidebarToggle}
							/>

							<div className="divider"></div>

							<div
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<NotificationBadge />
								<h6>Notifications</h6>
							</div>
							<div
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<MessageBadge />
								<h6>Messages</h6>
							</div>
							<div
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<OrderBadge />
								<h6>Oders</h6>
							</div>
							<div
								className="profile-links"
								onClick={handleSidebarToggle}
							>
								<EscrowBadge />
								<h6>Escrow</h6>
							</div>
						</div>
					)}
				</div>

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>Platform</h5>
				</div>

				<Platform handleSidebarToggle={handleSidebarToggle} />

				<div className="divider"></div>

				<div className="side-bar-heading">
					<h5>General</h5>
				</div>

				<div className="side-bar-general">
					<div
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<IoSettingsSharp className="side-bar-icon" />
						<h6>Settings</h6>
					</div>

					<DarkMode />

					<div
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<LuHelpCircle className="side-bar-icon" />
						<h6>Help</h6>
					</div>

					<div
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<BiSolidMessageDetail className="side-bar-icon" />
						<h6>Contact us</h6>
					</div>

					<div
						className="general-links"
						onClick={handleSidebarToggle}
					>
						<RiLogoutBoxLine className="side-bar-icon" />
						<h6>Log out</h6>
					</div>
				</div>
			</div>
		</div>
	);
};
