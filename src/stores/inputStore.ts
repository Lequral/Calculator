import { writable } from "svelte/store";
import { MathEvaluator } from "../function/math";

function createInput() {
    const { subscribe, update, set } = writable("0");

    return {
        subscribe,
        append: char => update(text => {
            if (text === "0") {
                return char
            } else {
                return text.concat(char)
            }
        }),
        delete: () => update(text => {
            if (1 < text.length) {
                return text.slice(0, text.length - 1)
            } else {
                return "0"
            }
        }),
        evaluate: () => update(text => {
            const result = MathEvaluator.evaluate(text);
            if (result.success) {
                return result.answer.toString();
            } else {
                return result.msg;
            }
        }),
        reset: () => set("0")
    }
}

export const input = createInput();