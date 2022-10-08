<template>
    <div id="bio">
        <div>
            <h1>Esti Tweg 🧗🏻‍♀️</h1>
            <p>Competitive Rock Climber</p>
            <h4>Nationality <span>Australian & Canadian</span></h4>
            <h4>Date of birth <span>04/04/1996</span></h4>
            <h4>Height <span>5 ft 7in</span></h4>
            <h4>Wingspan <span>5 ft 9in</span></h4>
        </div>
        <div class="img"><img src="/images/climbing.jpeg" /></div>
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

#bio {
    color: var(--darkPurple);
    display: flex;
    justify-content: space-between;

    @include mobile {
        flex-direction: column;
    }
}

p {
    margin-bottom: 2rem;
}

h4 {
    color: var(--darkPurple);
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}

span {
    font-weight: 400;
    margin-left: 1rem;
}

img {
    object-fit: contain;
    width: 40vw;

    @include mobile {
        width: 100%;
    }
}

.img {
    position: relative;



    &:after {
        position: absolute;
        content: 'Photo by Jack Pointon';
        bottom: 0;
        right: 5px;
        color: black;
        font-size: 0.7rem;
    }

    @include mobile {
        width: 85%;
        margin: 1rem auto 0;

        &:after {
            left: 3px;
            right: unset;
        }
    }
}
</style>
