import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

import styles from './header.module.scss';

const Header = () => {
	const [hoveredType, setHoveredType] = useState('');

	const handleIconHover = (e) => {
		const type = e?.currentTarget?.dataset?.type;
		setHoveredType(type);
	};

	const handleIconLeave = () => {
		setHoveredType('');
	};

	const typeTextClassNames = classNames(styles.type, {
		[styles.active]: !!hoveredType
	});

	return (
		<header className={styles.header}>
			<span className={typeTextClassNames}>{hoveredType}</span>
			<Image
				src='/portfolio.svg'
				width={50}
				height={50}
				data-type='work'
				onMouseEnter={handleIconHover}
				onMouseLeave={handleIconLeave}
				className={styles.icon}
			/>
			<Image
				src='/about.svg'
				width={50}
				height={50}
				data-type='bio'
				onMouseEnter={handleIconHover}
				onMouseLeave={handleIconLeave}
				className={styles.icon}
			/>
			<Image
				src='/contacts.svg'
				width={50}
				height={50}
				data-type='social'
				onMouseEnter={handleIconHover}
				onMouseLeave={handleIconLeave}
				className={styles.icon}
			/>
		</header>
	);
};

export default Header;
