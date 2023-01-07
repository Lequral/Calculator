<script lang="ts">
    export let value: string;
    export let color: string = "white";

    let pressed = false;
    let width: string;

    if (value === "reset" || value === "=") {
        width = "long";
    } else {
        width = "short";
    }

    const startPressing = () => pressed = true
    const stopPressing = () => pressed = false
</script>

<button
    on:mousedown={startPressing}
    on:click={stopPressing}
    on:mouseleave={stopPressing}
    class="{color} {width}"
    class:pressed
>
    <p>{value}</p>
</button>

<style lang="scss">
    @import "./../style/colorsTheme1.scss";

    button {
        height: 60px;
        border: 0;
        border-radius: 10px;
        font-family: "League Spartan";
    }

    .pressed {
        transform: translateY(5px);
        filter: drop-shadow(0 0 0) !important;
    }

    .white {
        background-color: $simple-key-bg;
        filter: drop-shadow(0px 4px 0px $simple-key-shadow);
        color: $simple-key-color;
        font-size: 38px;
    }

    .red {
        background-color: $dangerous-key-bg;
        filter: drop-shadow(0px 4px 0px $dangerous-key-shadow);
        color: $dangerous-key-color;
        text-transform: uppercase;
        font-size: 30px;
    }

    .blue {
        background-color: $special-key-bg;
        filter: drop-shadow(0px 4px 0px $special-key-shadow);
        color: $special-key-color;
        text-transform: uppercase;
        font-size: 30px;
    }

    .short {
        width: 100px;
    }

    .long {
        width: 230px;
    }

    button.white:hover {
        background-color: white;
    }

    button.blue:hover {
        filter: brightness(1.5) drop-shadow(0px 4px 0px $special-key-shadow);

        p {
            filter: brightness(3);
        }
    }

    button.red:hover {
        filter: brightness(1.5) drop-shadow(0px 4px 0px $dangerous-key-shadow);

        p {
            filter: brightness(3);
        }
    }
</style>
