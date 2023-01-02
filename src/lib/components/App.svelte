<script lang="ts">
    import Keypad from "./Keypad.svelte";
    import Screen from "./Screen.svelte";
    import ToggleTheme from "./Toggle-theme.svelte";
</script>


<header>
    <h3>calc</h3>

    <ToggleTheme />
</header>


<Screen />

<Keypad />


<style lang="scss">
    @import "./../style/colors.scss";

    header {
        width: 100%;
        height: 50px;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 10px;
        box-sizing: border-box;
    }
</style>