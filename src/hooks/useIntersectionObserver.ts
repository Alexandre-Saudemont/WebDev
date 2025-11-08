'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
	threshold?: number | number[];
	rootMargin?: string;
	triggerOnce?: boolean;
	delay?: number;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
	options: UseIntersectionObserverOptions = {},
) {
	const { threshold = 0.1, rootMargin = '0px', triggerOnce = true, delay = 0 } = options;
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<T>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		// Fallback : si l'Intersection Observer n'est pas supporté, afficher immédiatement
		if (typeof IntersectionObserver === 'undefined') {
			setIsVisible(true);
			return;
		}

		let observer: IntersectionObserver | null = null;
		let timeoutId: NodeJS.Timeout | null = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			// Double vérification après un court délai pour s'assurer que l'élément est dans le DOM
			setTimeout(() => {
				if (!elementRef.current) return;

				observer = new IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							if (delay > 0) {
								timeoutId = setTimeout(() => {
									setIsVisible(true);
									if (triggerOnce && observer) {
										observer.disconnect();
									}
								}, delay);
							} else {
								setIsVisible(true);
								if (triggerOnce && observer) {
									observer.disconnect();
								}
							}
						} else if (!triggerOnce) {
							setIsVisible(false);
						}
					},
					{ threshold, rootMargin },
				);

				observer.observe(element);
			}, 50); // Petit délai pour s'assurer que le DOM est prêt
		});

		return () => {
			cancelAnimationFrame(rafId);
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			if (observer) {
				observer.disconnect();
			}
		};
	}, [threshold, rootMargin, triggerOnce, delay]);

	return { elementRef, isVisible };
}

