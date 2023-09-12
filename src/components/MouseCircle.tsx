'use client';
import { useEffect, useState } from 'react';

const MouseCircle = () => {
	const [coord, setCoord] = useState({ coordX: 0, coordY: 0 });
	const [coordPoint, setCoordPoint] = useState({ x: 0, y: 0 });
	const [isPointer, setIsPointer] = useState(false);

	const handleMouseMove = (evt: MouseEvent) => {
		setTimeout(() => {
			setCoord({ coordX: evt.clientX, coordY: evt.clientY });
		}, 60);
		setTimeout(() => {
			setCoordPoint({ x: evt.clientX, y: evt.clientY });
		}, 40);
		// we check if the cursor is over a clickable element by inspecting the cursor style.
		setIsPointer(
			window.getComputedStyle(evt.target as Element).getPropertyValue('cursor') === 'pointer'
		);
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	}, []);

	let isHoverPointer = isPointer ? 'border-cyan-300/30' : 'border-cyan-300/70';
	let isHoverPointer2 = isPointer ? 'bg-emerald-300/30 scale-[3]' : 'bg-emerald-300/70 scale-100';

	return (
		<>
			<div
				style={{ top: `${coord.coordY}px`, left: `${coord.coordX}px` }}
				className={`max-[900px]:hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed z-[999] w-7 h-7 rounded-full border ${isHoverPointer}`}
			/>
			<div
				style={{ top: `${coordPoint.y}px`, left: `${coordPoint.x}px` }}
				className={`max-[900px]:hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed z-[999] w-1.5 h-1.5 transition-transform duration-300 rounded-full ${isHoverPointer2}`}
			/>
		</>
	);
};

export default MouseCircle;
