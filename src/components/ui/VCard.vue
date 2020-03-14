<template>
    <div class="card shadow border-gray-200">
        <div class="card-header bg-white border-gray-200" v-if="hasHeaderSlot">
            <slot name="header" />
        </div>
        <slot v-if="noBody" />
        <div class="card-body" v-else>
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: "VCard",
        props: {
            noBody: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            hasHeaderSlot() {
                return this.$slots.header;
            },
        },
    };
</script>
