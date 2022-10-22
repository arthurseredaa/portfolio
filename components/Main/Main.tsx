import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, { FC, useState } from 'react';

import AnimatedCircles from '../AnimatedCircles/AnimatedCircles';

import styles from './main.module.scss';

const containerVariants: Variants = {
	initial: {
		opacity: 0,
		y: 200
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0
	}
};

const titleVariants: Variants = {
	initial: {
		opacity: 0,
		transform: 'scale(0.7) rotate(30deg)'
	},
	animate: {
		opacity: 1,
		transform: 'scale(1) rotate(0deg)'
	},
	exit: {
		opacity: 0,
		transform: 'translateY(20px)',
		transition: {
			duration: 0.5
		}
	}
};

const Main: FC = () => {
	const [showTitle, setShowTitle] = useState(true);

	const hideTitle = () => setShowTitle(false);

	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.7, type: 'spring' }}
			className={styles.container}
		>
			<div className={styles.content}>
				<AnimatePresence>
					{showTitle && (
						<motion.h1
							variants={titleVariants}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: 1, type: 'spring', delay: 0.7 }}
							className={styles.title}
							onClick={hideTitle}
						>
							See projects
						</motion.h1>
					)}
				</AnimatePresence>
				<AnimatedCircles isTitleHidden={!showTitle} />
			</div>
		</motion.div>
	);
};

export default Main;
