<template>
    <div id="social">
        <a href="https://www.facebook.com/estionawall" target="_blank">
            <img src="/images/facebook-icon.svg" /></a>
        <a href="https://www.instagram.com/estionawall/" target="_blank">
            <img src="/images/instagram-icon.svg" /></a>
        <a href="https://www.tiktok.com/@estionawall" target="_blank">
            <img src="/images/logo-tiktok.svg" /></a>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { mobile, desktop } from '../utils/Breakpoints';


onMounted(() => {
});


</script>
<style scoped lang="scss">
@import '../scss/mixins.scss';

#social {
    margin-top: 2rem;
    display: flex;
}

img {
    height: 1rem;
    width: 1rem;
    object-fit: contain;
    margin-right: 1rem;


}

svg:hover {
    fill: blue;
}
</style>
