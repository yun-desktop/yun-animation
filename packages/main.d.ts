/**
 * Define Animation
 * @param {object} animation animation description
 * @param {number} durationTime animation duration time
 */
export default function defineAnimation(animation: StyleSheet, durationTime?: number, runCount?: number): {
    to: (element: HTMLElement, time: number, count: number) => {
        end: (callback: Function) => void;
    };
};
