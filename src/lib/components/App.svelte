<script lang="ts">
    import Keypad from "./Keypad.svelte";
    import Screen from "./Screen.svelte";
    import ToggleTheme from "./Toggle-theme.svelte";
</script>


<header>
    <h4>calc</h4>

    <ToggleTheme />
</header>


<Screen />

<Keypad />


<style lang="scss">
    @import "./../style/colorsTheme1.scss";

    header {
        width: 100%;
        height: 50px;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 0 0 5px;
        box-sizing: border-box;
        }
</style>