"use client";

import "./account.settings.scss";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

export const AccountSettings = () => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className="avatar">
					<div className="tag">
						<p>account settings</p>
					</div>
					<Image
						src="https://i.postimg.cc/VLT3vYV3/profile.jpg"
						fill={true}
						alt="woman driving"
						className="profile"
					/>
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content sideOffset={5} align="end" asChild>
					<div className="dropdownContent">hello</div>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
