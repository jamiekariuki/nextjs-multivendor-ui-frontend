import * as React from "react";
import "./badge.scss";
import { useState } from "react";
import { useEffect } from "react";
import { TbMailFilled } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

export function MessageBadge() {
	const [count, setCount] = useState(false);
	const [message, setMessage] = useState(0);

	useEffect(() => {
		setMessage(2);

		if (message >= 1) {
			setCount(true);
		} else {
			setCount(false);
		}
	}, [message]);
	const exceeds99 = message > 99;
	return (
		<div className="badge">
			<TbMailFilled className="icon" />
			{count && (
				<div className="count">
					<p>{exceeds99 ? "99+" : message}</p>
				</div>
			)}
		</div>
	);
}

export function NotificationBadge() {
	const [count, setCount] = useState(false);
	const [notif, setNotif] = useState(0);

	useEffect(() => {
		setNotif(6);

		if (notif >= 1) {
			setCount(true);
		} else {
			setCount(false);
		}
	}, [notif]);
	const exceeds99 = notif > 99;
	return (
		<div className="badge">
			<AiFillBell className="icon" />
			{count && (
				<div className="count">
					<p>{exceeds99 ? "99+" : notif}</p>
				</div>
			)}
		</div>
	);
}

export function CartBadge() {
	const [count, setCount] = useState(false);
	const [cart, setCart] = useState(0);

	useEffect(() => {
		setCart(5);
		if (cart >= 1) {
			setCount(true);
		} else {
			setCount(false);
		}
	}, [cart]);
	const exceeds99 = cart > 99;
	return (
		<div className="badge">
			<MdShoppingCart className="icon cart-icon" />
			{count && (
				<div className="count cart-count">
					<p>{exceeds99 ? "99+" : cart}</p>
				</div>
			)}
		</div>
	);
}
