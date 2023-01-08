<script lang="ts">
    import { theme } from "../stores/themeStore";
    import Keypad from "./Keypad.svelte";
    import Screen from "./Screen.svelte";
    import ToggleTheme from "./Toggle-theme.svelte";
</script>

<div class="body theme{$theme}">
    <main>
        <header>
            <h4>calc</h4>
    
            <ToggleTheme />
        </header>
    
        <Screen />
    
        <Keypad />
    </main>
</div>


<style lang="scss">
    @import "./../style/colorsTheme.scss";

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

    .body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .body.theme1 {
        color: $T1-header-screen-color;
        background-color: $T1-main-bg;
    }
    .body.theme2 {
        color: $T2-header-screen-color;
        background-color: $T2-main-bg;
    }
    .body.theme3 {
        color: $T3-header-screen-color;
        background-color: $T3-main-bg;
    }

    main {
        width: 540px;
        height: 700px;

        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        row-gap: 30px;
    }
</style>
