<template>
	<Bio />
	<Results />
	<Social />
</template>


<script setup>
import Results from './views/Results.vue';
import Social from './components/Social.vue';
import Bio from './components/Bio.vue';

</script>

<style lang="scss">
@import './scss/mixins.scss';

body {
	margin: 0;
}

#app {
	background: var(--background2);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	padding: 2rem;

	@include mobile {
		padding: 2rem 1.5rem;
	}
}
</style>
