<template>
    <div id="app">
        <AppSidebar />
        <AppContent />
    </div>
</template>

<script>
    import AppSidebar from "@/components/layout/AppSidebar";
    import AppContent from "@/components/layout/AppContent";

    export default {
        name: "App",
        components: {
            AppContent,
            AppSidebar,
        },
    };
</script>
