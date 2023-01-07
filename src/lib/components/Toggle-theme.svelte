<script lang="ts">
    let theme = 1
    $: cursorY = ["flex-start", "center", "flex-end"][theme-1]

    const changeTheme = () => {
        if (theme !== 3) {
            theme++
        } else {
            theme = 1
        }
    };
</script>

<div class="container">
    <ul class="legend">
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <div class="interactible">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p on:click={changeTheme} >theme</p>

        <button on:click={changeTheme} style="justify-content: {cursorY};">
            <div class="cursor" />
        </button>
    </div>
</div>

<style lang="scss">
    @import "./../style/colorsTheme1.scss";

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

            p {
                text-align: left;
                width: 50%;
                cursor: pointer;
            }

            button {
                width: 50%;
                height: 28px;
                border: 0;
                border-radius: 14px;
                background-color: $keypad-bg;

                display: flex;
                align-items: center;

                .cursor {
                    width: 18px;
                    height: 18px;
                    background-color: $dangerous-key-bg;
                    border-radius: 50%;
                }
            }

            button:hover .cursor {
                filter: brightness(1.8);
            }
        }
    }
</style>
