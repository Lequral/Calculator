<script lang="ts">
    import { theme } from "./../stores/themeStore.js";

    $: cursorX = ["flex-start", "center", "flex-end"][$theme - 1];
</script>

<div class="container">
    <ul class="legend">
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <div class="interactible">
        <label for="theme-changer">theme</label>

        <button
            id="theme-changer"
            on:click={theme.next}
            tabindex="0"
            style="justify-content: {cursorX};"
            class="theme{$theme}"
            aria-label="Theme changer"
        >
            <!-- <div class="cursor" /> -->
        </button>
    </div>
</div>

<style lang="scss">
    @import "./../style/colorsTheme.scss";

    div.container {
        width: 150px;
        height: 45px;
        font-size: 14px;
        text-transform: uppercase;

        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-content: flex-end;

        ul {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;

            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;

            li {
                margin: 0;
                padding: 0;
            }
        }
        ul.legend {
            width: 50%;
            margin-left: 50%;
            padding: 0 10px;
        }

        div.interactible {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;

            button {
                width: 50%;
                height: 28px;
                border: 0;
                border-radius: 14px;

                display: flex;
                align-items: center;
            }
            button::after {
                content: "";
                width: 18px;
                height: 18px;
                border-radius: 50%;
            }

            button:hover::after {
                filter: brightness(1.8);
            }
        }
    }

    div.interactible button.theme1 {
        background-color: $T1-keypad-bg;
    }
    button.theme1::after {
        background-color: $T1-dangerous-key-bg;
    }
    div.interactible button.theme2 {
        background-color: $T2-keypad-bg;
    }
    button.theme2::after {
        background-color: $T2-dangerous-key-bg;
    }
    div.interactible button.theme3 {
        background-color: $T3-keypad-bg;
    }
    button.theme3::after {
        background-color: $T3-dangerous-key-bg;
    }
</style>
