"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { floatData } from "../../floating nav/float.data";
import "./accordion.scss";

export const Platform = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="side-bar-accordion"> 
			{floatData.map((item) => (
				<Accordion
					key={item.title}
					expanded={expanded === `panel${item.title}`}
					onChange={handleChange(`panel${item.title}`)}
					className="accordion-wrapper"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className="expand-icon" />}
						aria-controls={`panel${item.title}bh-content`}
						id={`panel${item.title}bh-header`}
						className={`summary ${
							expanded === `panel${item.title}` ? "open" : ""
						}`}
					>
						<div className="accordion-title-wrapper">
							<item.icon className="accordion-icons" />
							<h5 className="item-title">{item.title}</h5>
						</div>
					</AccordionSummary>
					<AccordionDetails className="accordionDetails">
						<ul>
							{item.list.map((listItem) => (
								<li key={listItem.title}>
									{/* <a href={listItem.link}> */}
										<div className="list-wrapper">
											<p>{listItem.title}</p>
										</div>
									{/* </a> */}
								</li>
							))}
						</ul>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};