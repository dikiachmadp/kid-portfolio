'use client'

import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { scrollTrigger } from '@/animations/motion'

// ======================================================
// REVEAL COMPONENT PROPS
// ======================================================

interface RevealProps {
    /** Child elements to animate */
    children: ReactNode
    /** Optional delay before animation starts */
    delay?: number
    /** Optional additional className */
    className?: string
    /** Optional: use faster animation */
    fast?: boolean
    /** Optional: use slower animation */
    slow?: boolean
    /** Optional: disable animation */
    disabled?: boolean
}

// ======================================================
// REVEAL COMPONENT
// ======================================================

/**
 * A reusable reveal component that animates children when they enter
 * the center-middle viewport zone.
 * 
 * - Does not break layout or introduce unnecessary wrappers
 * - Uses GPU-friendly transforms only (opacity + translateY)
 * - Supports reversible scroll behavior (re-reveals when scrolling back)
 * - No wrapper elements that affect DOM hierarchy
 */
export default function Reveal({
    children,
    delay = 0,
    className = '',
    fast = false,
    slow = false,
    disabled = false,
}: RevealProps) {
    // Select the appropriate animation config based on props
    const getAnimationConfig = (): Variants => {
        if (fast) {
            return {
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1] as const,
                        delay: delay,
                    },
                },
                exit: {
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.2 },
                },
            }
        }

        if (slow) {
            return {
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.7,
                        ease: [0.4, 0, 0.2, 1] as const,
                        delay: delay,
                    },
                },
                exit: {
                    opacity: 0,
                    y: 40,
                    transition: { duration: 0.3 },
                },
            }
        }

        return {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1] as const,
                    delay: delay,
                },
            },
            exit: {
                opacity: 0,
                y: 20,
                transition: { duration: 0.3 },
            },
        }
    }

    const animationConfig = getAnimationConfig()

    // If disabled, render without animation
    if (disabled) {
        return (
            <div className={className}>
                {children}
            </div>
        )
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={scrollTrigger.viewport}
            variants={animationConfig}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ======================================================
// STAGGER REVEAL COMPONENT
// ======================================================

/**
 * A variant of Reveal that staggers animations of children elements.
 * Useful for lists, grids, or groups of items.
 */
interface StaggerRevealProps {
    /** Child elements to animate with stagger */
    children: ReactNode
    /** Stagger delay between each child */
    staggerDelay?: number
    /** Optional custom width */
    width?: 'fit-content' | '100%'
    /** Optional additional className */
    className?: string
    /** Optional: custom animation config */
    customVariants?: Variants
}

export function StaggerReveal({
    children,
    staggerDelay = 0.1,
    width = '100%',
    className = '',
    customVariants,
}: StaggerRevealProps) {
    const defaultContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: staggerDelay,
            },
        },
    }

    const defaultItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollTrigger.viewport}
            variants={customVariants || defaultContainerVariants}
            style={{ width }}
            className={className}
        >
            {/* 
                For children to be staggered, they need to be wrapped in motion.div
                with the itemVariants. This is a container that applies the stagger.
            */}
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <motion.div
                        key={index}
                        variants={customVariants ? undefined : defaultItemVariants}
                    >
                        {child}
                    </motion.div>
                ))
                : <motion.div variants={customVariants ? undefined : defaultItemVariants}>
                    {children}
                </motion.div>
            }
        </motion.div>
    )
}

// ======================================================
// CHILD ITEM FOR STAGGER
// ======================================================

/**
 * A motion component to be used inside StaggerReveal for individual items.
 * This allows each child to have its own animation while being part of a stagger group.
 */
export const StaggerItem = ({
    children,
    className = '',
    delay = 0,
}: {
    children: ReactNode
    className?: string
    delay?: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollTrigger.viewport}
        transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay,
        }}
        className={className}
    >
        {children}
    </motion.div>
)

