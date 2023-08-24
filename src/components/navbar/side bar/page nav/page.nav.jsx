"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiOutlineMapPin } from "react-icons/hi2";

export const PageNav = ({ handleSidebarToggle }) => {
	return (
		<div className="side-bar-profile">
			<div className="divider"></div>
			<div className="profile-links" onClick={handleSidebarToggle}>
				<AiOutlineHome />
				<h6>Home</h6>
			</div>
			<div className="profile-links" onClick={handleSidebarToggle}>
				<BsPerson />
				<h6>For you</h6>
			</div>
			<div className="profile-links" onClick={handleSidebarToggle}>
				<MdOutlineExplore />
				<h6>Explore</h6>
			</div>
			<div className="profile-links" onClick={handleSidebarToggle}>
				<GoPeople />
				<h6>From recomended</h6>
			</div>
			<div className="profile-links" onClick={handleSidebarToggle}>
				<HiOutlineMapPin />
				<h6>Near you</h6>
			</div>
		</div>
	);
};
