"use client";
import React from "react";
import "./hero.scss";
import Image from "next/image";
import { HeroContent } from "./hero content/hero.content";

export const Hero = () => {
	return (
		<div className="hero">
			<HeroContent />
			<div className="hero-background-container">
				<div className="hero-background-image">
					<div className="hero-image-container">
						<Image
							src="https://i.postimg.cc/1RwJhWCh/header3.png"
							fill={true}
							alt="two girls looking at their phone holding shopping bags"
							className="hero-image"
						/>
						<div className="a1"></div>
					</div>
				</div>
				{/* <div className="a1"></div> */}
				<div className="a2"></div>
				<div className="a3"></div>
				<div className="a4"></div>
				<div className="a5"></div>
				<div className="a6"></div>
				<div className="a7"></div>

				<div className="b1-container">
					<div className="b1"></div>
					<div className="b1-line-container">
						<div className="line-1"></div>
						<div className="line-2"></div>
					</div>
				</div>

				<div className="b2"></div>
				<div className="b3"></div>
				<div className="b4"></div>

				<div className="b5-container">
					<div className="b5"></div>
					<div className="b5-line-container">
						<div className="line-4"></div>
						<div className="line-5"></div>
					</div>
				</div>

				<div className="b7-container">
					<div className="b7"></div>
					<div className="b7-line-container">
						<div className="line-7"></div>
						<div className="line-8"></div>
					</div>
				</div>

				<div className="c1"></div>
				<div className="c2"></div>
			</div>
		</div>
	);
};
