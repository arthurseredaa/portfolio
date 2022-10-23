import classNames from 'classnames';
import { Variants, motion, useAnimation } from 'framer-motion';
import React, { FC, useEffect } from 'react';

import styles from './animated_circles.module.scss';

const generateRandomVariants = (order: number): Variants => {
	const minValue = 0;
	const maxValue = 400;

	const randomInitialValue = Number(
		(Math.random() * (maxValue - minValue) + minValue).toFixed(0)
	);
	const randomAnimateValue = Number(
		(Math.random() * (maxValue - minValue) + minValue).toFixed(0)
	);

	return {
		initial: {
			x: -randomInitialValue,
			opacity: 0
		},
		animate: {
			x: randomAnimateValue,
			opacity: 1
		},

		animate2: {
			y: -400 + order * 50,
			x: 0,
			opacity: 0.5,

			transition: {
				delay: 0.5,
				repeat: 0,
				duration: 2,
				type: 'spring'
			}
		}
	};
};

const generateRandomDuration = (): number => {
	const minValue = 1;
	const maxValue = 5;

	return Number((Math.random() * (maxValue - minValue) + minValue).toFixed(0));
};

interface Props {
	isTitleHidden: boolean;
}

const AnimatedCircles: FC<Props> = ({ isTitleHidden }) => {
	const circle = useAnimation();

	useEffect(() => {
		circle.start('animate');
	}, []);

	useEffect(() => {
		if (isTitleHidden) {
			circle.start('animate2');
		}
	}, [isTitleHidden]);

	const circleClassNames = classNames(styles.circle, {
		[styles.clickable]: isTitleHidden
	});

	return (
		<div className={styles.circles_wrapper}>
			{Array(5)
				.fill(null)
				.map((_, index) => (
					<motion.circle
						key={index}
						initial='initial'
						animate={circle}
						exit='exit'
						transition={{
							type: 'spring',
							duration: generateRandomDuration(),
							repeatType: 'mirror',
							repeat: Infinity
						}}
						className={circleClassNames}
						variants={generateRandomVariants(index + 1)}
					/>
				))}
		</div>
	);
};

export default AnimatedCircles;
