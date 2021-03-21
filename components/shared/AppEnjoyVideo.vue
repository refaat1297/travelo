<template>
    <section class="enjoy-video">
        <h3>enjoy video</h3>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="video-play-button" v-for="(image, imageIndex) in items" :key="imageIndex" @click="index = imageIndex" >
            <span></span>
        </div>

<!--        <div v-for="(image, imageIndex) in items" :key="imageIndex" @click="index = imageIndex" class="video-button"><span></span></div>-->

    </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: "AppEnjoyVideo",
    components: {
        CoolLightBox
    },
    data () {
        return {
            items: [
                {
                    src: 'https://youtu.be/f59dDEk57i0',
                },
            ],
            index: null
        };
    }
}
</script>

<style lang="scss">
@keyframes pulse-border {
    0% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
        opacity: 0;
    }
}

.enjoy-video {
    height: 600px;
    background-image: url("~assets/img/shared/enjoy-video.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 767px) {
        height: 500px;
    }


    h3 {
        font-family: headingFont, sans-serif;
        color: #fff;
        font-size: 4rem;
        text-transform: capitalize;
        transform: scale(1.2);
        margin-bottom: 2rem;
        font-weight: 500;

        @media (max-width: 767px) {
            transform: scale(1.1);
            font-size: 3.1rem;
        }
    }


    .video-play-button {
        position: relative;
        top: 30px;
        z-index: 10;
        width: 32px;
        height: 44px;
        /* background: #fa183d; */
        border-radius: 50%;
        padding: 18px 20px 18px 28px;
        display: grid;
        place-items: center;

        @media (max-width: 767px) {
            transform: scale(.9);
        }
    }

    .video-play-button:before {
        content: "";
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 95px;
        height: 95px;
        background: var(--secondary-color);
        border-radius: 50%;
        animation: pulse-border 1500ms ease-out infinite;
    }

    .video-play-button:after {
        content: "";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 95px;
        height: 95px;
        background: var(--secondary-color);
        border-radius: 50%;
        transition: all 200ms;
    }

    .video-play-button:hover:after {
        //background-color: darken(var(--secondary-color), 10%);
        background-color: darken(#1ec6b6, 10%);
    }

    .video-play-button img {
        position: relative;
        z-index: 3;
        max-width: 100%;
        width: auto;
        height: auto;
    }

    .video-play-button span {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-34%, -46%);
        z-index: 3;
        width: 0;
        height: 0;
        border-left: 16px solid #fff;
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;

    }


}


</style>
