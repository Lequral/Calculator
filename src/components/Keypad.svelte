<script lang="ts">
    import { theme } from "./../stores/themeStore";
    import Key from "./Key.svelte";

    let keys = [
        "7", "8", "9", "del",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "*",
        "reset", "="
    ]

    let coloredCharacters = {3: "blue", 16: "blue", 17: "red"};
</script>

<div class="keypad theme{$theme}">
    {#each keys as key, index}
        <Key value={key} color={coloredCharacters[index]}/>
    {/each}
</div>

<style lang="scss">
    @import "./../style/colorsTheme.scss";

    div.keypad {
        width: 100%;
        height: 490px;

        box-sizing: border-box;
        padding: 30px;
        border-radius: 10px;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-content: space-between;
    }
    div.keypad.theme1 {
        background-color: $T1-keypad-bg;
    }
    div.keypad.theme2 {
        background-color: $T2-keypad-bg;
    }
    div.keypad.theme3 {
        background-color: $T3-keypad-bg;
    }
</style>