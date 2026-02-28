import { type Variant } from 'framer-motion'

// ======================================================
// GLOBAL ANIMATION CONFIGURATION
// ======================================================

// Animation duration constants
export const durations = {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
} as const

// Easing curves - smooth and natural
export const easings = {
    smooth: [0.25, 0.1, 0.25, 1] as const, // Cubic bezier - easeOutQuart
    gentle: [0.4, 0, 0.2, 1] as const,      // Cubic bezier - easeOutCubic
    standard: [0.4, 0, 0.2, 1] as const,   // Material Design standard
} as const

// Scroll trigger configuration
export const scrollTrigger = {
    // Center-middle viewport logic
    // Element is "in view" when aligned with vertical center of screen
    // Element is "out of view" when it leaves the center-middle viewport zone
    viewport: {
        once: false, // Always support reversible scroll behavior
        margin: '-10% 0px -10% 0px', // Trigger zone is 80% from top to bottom
    },
} as const

// ======================================================
// REVEAL ANIMATION VARIANTS
// ======================================================

// Hidden state - element is invisible and slightly shifted down
export const revealHidden: Variant = {
    opacity: 0,
    y: 20, // Subtle translateY (not dramatic)
}

// Visible state - element is fully visible and in natural position
export const revealVisible: Variant = {
    opacity: 1,
    y: 0,
    transition: {
        duration: durations.normal,
        ease: easings.smooth,
    },
}

// Exit state - element fades out and shifts down when leaving
export const revealExit: Variant = {
    opacity: 0,
    y: 20,
    transition: {
        duration: durations.fast,
        ease: easings.gentle,
    },
}

// ======================================================
// STAGGER CHILDREN CONFIGURATION
// ======================================================

export const staggerConfig = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: durations.normal,
                ease: easings.smooth,
            },
        },
    },
} as const

// ======================================================
// PRESET ANIMATION CONFIGS
// ======================================================

// Default reveal animation
export const revealConfig = {
    hidden: revealHidden,
    visible: revealVisible,
    exit: revealExit,
}

// Fast reveal - quicker animation
export const fastRevealConfig = {
    hidden: revealHidden,
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.fast,
            ease: easings.smooth,
        },
    },
    exit: revealExit,
}

// Slow reveal - slower, more dramatic animation
export const slowRevealConfig = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.gentle,
        },
    },
    exit: { opacity: 0, y: 40 },
}

// ======================================================
// EXPORTS
// ======================================================

export default {
    durations,
    easings,
    scrollTrigger,
    revealHidden,
    revealVisible,
    revealExit,
    staggerConfig,
    revealConfig,
    fastRevealConfig,
    slowRevealConfig,
}

