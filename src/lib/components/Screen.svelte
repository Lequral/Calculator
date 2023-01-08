<script>
    import { input } from "../stores/inputStore";
    import { theme } from "../stores/themeStore";
</script>

<div class="theme{$theme}">
    <h1>{ $input }</h1>
</div>

<style lang="scss">
    @import "./../style/colorsTheme.scss";

    div {
        border-radius: 10px;
        box-sizing: border-box;

        height: 130px;
        width: 100%;
        margin-bottom: -5px;
        padding: 30px;

        display: flex;
        align-items: center;

        h1 {
            text-align: right;
            position: relative;
            top: 5px;
            width: 100%;
        }
    }
    div.theme1 {
        background-color: $T1-screen-bg;
    }
    div.theme2 {
        background-color: $T2-screen-bg;
    }
    div.theme3 {
        background-color: $T3-screen-bg;
    }
</style>
