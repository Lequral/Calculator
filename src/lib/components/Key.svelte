<script lang="ts">
    export let value : string;
    export let color : string = "white";
    
    let width : string;
    if (value === "reset" || value === "=") {
        width = "long";
    } else {
        width = "short";
    }
</script>

<button class="{color} {width}">
    <p>{value}</p>    
</button>

<style lang="scss">
    @import "./../style/colors.scss";

    button {
        height: 60px;
        border: 0;
        border-radius: 5px;
        font-size: 32px;
        font-family: "League Spartan";
    }

    .white {
        background-color: $white-key-bg;
        filter: drop-shadow(0px 5px 0px $white-key-shadow);
        color: $grey;
    }

    .red {
        background-color: $red-key-bg;
        filter: drop-shadow(0px 5px 0px $red-key-shadow);
        color: $white;
        text-transform: uppercase;
    }

    .blue {
        background-color: $blue-key-bg;
        filter: drop-shadow(0px 5px 0px $blue-key-shadow);
        color: $white;
        text-transform: uppercase;
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
        filter: brightness(1.5) drop-shadow(0px 5px 0px $blue-key-shadow);
        
        p {
            filter: brightness(3);
        }
    }

    button.red:hover {
        filter: brightness(1.5) drop-shadow(0px 5px 0px $red-key-shadow);
        
        p {
            filter: brightness(3);
        }
    }
</style>
