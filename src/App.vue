<template>
    <div id="app">
        <LeftSidebar />
        <MainContent />
    </div>
</template>

<script>
    import LeftSidebar from "@/components/LeftSidebar";
    import MainContent from "@/components/MainContent";

    export default {
        name: "App",
        components: {
            MainContent,
            LeftSidebar,
        },
    };
</script>
