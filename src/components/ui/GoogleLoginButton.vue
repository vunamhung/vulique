<template>
    <button class="google-button">
        <span class="google-button__icon">
            <svgicon name="google" width="18" height="18" />
        </span>
        <span class="google-button__text">Sign in with Google</span>
    </button>
</template>

<script>
    export default {
        name: "GoogleLoginButton",
    };
</script>

<style lang="scss">
    .google-button {
        height: 50px;
        background-color: $primary;
        border: 1px solid $primary;
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        padding: 0;
        transition: $transition-base;
        &:hover,
        &:focus {
            box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
        }
        &__icon {
            width: 18px;
            height: 18px;
            padding: 15px;
            background-color: $white;
            border-radius: 1px;
        }
        &__text {
            padding: 0 25px;
        }
    }
</style>
