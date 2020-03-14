<template>
    <b-card class="shadow" border-variant="gray-200" header-bg-variant="white" header-border-variant="gray-200">
        <template v-slot:header v-if="hasHeaderSlot">
            <slot name="header" />
        </template>
        <slot />
    </b-card>
</template>

<script>
    export default {
        name: "VCard",
        computed: {
            hasHeaderSlot() {
                return this.$slots.header;
            },
        },
    };
</script>
