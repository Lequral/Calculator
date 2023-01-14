<script lang="ts">
    import { input } from "../stores/inputStore";
    import { theme } from "../stores/themeStore";

    export let value: string;
    export let color: string = "white";

    let text: string;
    if (value === "*") {
        text = "x";
    } else {
        text = value;
    }

    let pressed = false;
    let width: string;

    if (value === "reset" || value === "=") {
        width = "long";
    } else {
        width = "short";
    }

    const startPressing = () => (pressed = true);
    const stopPressing = () => (pressed = false);
    const handleClick = () => {
        if (value === "del") {
            input.delete();
        } else if (value === "reset") {
            input.reset();
        } else if (value === "=") {
            input.evaluate();
        } else {
            input.append(value);
        }
    };
</script>

<button
    on:mousedown={startPressing}
    on:mouseup={stopPressing}
    on:mouseleave={stopPressing}
    on:click={handleClick}
    class="{color} {width} theme{$theme}"
    class:pressed
    >
    {text}
</button>

<style lang="scss">
    @import "./../style/colorsTheme.scss";

    button {
        height: 60px;
        // border: 0;
        border-radius: 10px;
        font-family: "League Spartan";
        border: 10px solid var(--red) !important;
        transition: 100ms;
    }

    .pressed {
        transform: translateY(5px);
        filter: drop-shadow(0 0 0) !important;
    }

    .white {
        font-size: 38px;
    }
    .white.theme1 {
        background-color: $T1-simple-key-bg;
        filter: drop-shadow(0px 4px 0px $T1-simple-key-shadow);
        color: $T1-simple-key-color;
    }
    .white.theme2 {
        background-color: $T2-simple-key-bg;
        filter: drop-shadow(0px 4px 0px $T2-simple-key-shadow);
        color: $T2-simple-key-color;
    }
    .white.theme3 {
        background-color: $T3-simple-key-bg;
        filter: drop-shadow(0px 4px 0px $T3-simple-key-shadow);
        color: $T3-simple-key-color;
    }

    .red {
        text-transform: uppercase;
        font-size: 30px;
    }
    .red.theme1 {
        background-color: $T1-dangerous-key-bg;
        filter: drop-shadow(0px 4px 0px $T1-dangerous-key-shadow);
        color: $T1-dangerous-key-color;
    }
    .red.theme2 {
        background-color: $T2-dangerous-key-bg;
        filter: drop-shadow(0px 4px 0px $T2-dangerous-key-shadow);
        color: $T2-dangerous-key-color;
    }
    .red.theme3 {
        background-color: $T3-dangerous-key-bg;
        filter: drop-shadow(0px 4px 0px $T3-dangerous-key-shadow);
        color: $T3-dangerous-key-color;
    }

    .blue {
        text-transform: uppercase;
        font-size: 30px;
    }
    .blue.theme1 {
        background-color: $T1-special-key-bg;
        filter: drop-shadow(0px 4px 0px $T1-special-key-shadow);
        color: $T1-special-key-color;
    }
    .blue.theme2 {
        background-color: $T2-special-key-bg;
        filter: drop-shadow(0px 4px 0px $T2-special-key-shadow);
        color: $T2-special-key-color;
    }
    .blue.theme3 {
        background-color: $T3-special-key-bg;
        filter: drop-shadow(0px 4px 0px $T3-special-key-shadow);
        color: $T3-special-key-color;
    }

    .short {
        width: 100px;
    }

    .long {
        width: 230px;
    }

    button.white.theme1:hover,
    button.white.theme2:hover {
        background-color: white;
    }
    button.white.theme3:hover {
        filter: brightness(2) drop-shadow(0px 4px 0px $T3-simple-key-shadow);
    }

    button.blue:hover p {
        filter: brightness(3);
    }
    button.blue.theme1:hover {
        filter: brightness(1.5) drop-shadow(0px 4px 0px $T1-special-key-shadow);
    }
    button.blue.theme2:hover {
        filter: brightness(1.5) drop-shadow(0px 4px 0px $T2-special-key-shadow);
    }
    button.blue.theme3:hover {
        filter: brightness(2) drop-shadow(0px 4px 0px $T3-special-key-shadow);
    }

    button.red:hover p {
        filter: brightness(3);
    }
    button.red.theme1:hover {
        filter: brightness(1.5)
            drop-shadow(0px 4px 0px $T1-dangerous-key-shadow);
    }
    button.red.theme2:hover {
        filter: brightness(1.5)
            drop-shadow(0px 4px 0px $T2-dangerous-key-shadow);
    }
    button.red.theme3:hover {
        filter: brightness(3) drop-shadow(0px 4px 0px $T3-dangerous-key-shadow);
    }
</style>
