<script>
    import { BCard } from "bootstrap-vue";

    export default {
        extends: BCard,
        name: "VCard",
        props: {
            headerBgVariant: {
                default: "white",
            },
            headerBorderVariant: {
                default: "gray-200",
            },
            borderVariant: {
                default: "gray-200",
            },
        },
    };
</script>
