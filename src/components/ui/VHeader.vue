<template>
    <div class="header">
        <div class="container">
            <div class="header-body">
                <div class="row align-items-end">
                    <div class="col">
                        <h6 class="header-pretitle" v-if="preTitle">{{ preTitle }}</h6>
                        <h1 class="header-title mb-0">{{ title }}</h1>
                    </div>
                    <div class="col-auto" v-if="hasToolbarSlot">
                        <slot name="toolbar"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "VHeader",
        props: {
            preTitle: {
                type: String,
            },
            title: {
                type: String,
            },
        },
        computed: {
            hasToolbarSlot() {
                return this.$slots.toolbar;
            },
        },
    };
</script>
