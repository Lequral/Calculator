<script lang="ts">
    import Key from "./Key.svelte";


    let keys = [
        "7", "8", "9", "del",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "x",
        "reset", "="
    ]

    let coloredCharacters = {3: "blue", 16: "blue", 17: "red"};
</script>

<div class="keypad">
    {#each keys as key, index}
        <Key value={key} color={coloredCharacters[index]}/>
    {/each}
</div>

<style lang="scss">
    @import "./../style/colors.scss";

    div.keypad {
        width: 100%;
        height: 480px;

        box-sizing: border-box;
        padding: 30px;
        border-radius: 10px;
        background-color: $keypad-bg;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: space-between;
    }
</style>