<template>
    <DemoSettings>
        <div class="flex items-center gap-1">
            <label for="animate-on-scoll-animation">Animation: </label>
            <Select
                v-model="selectedAnimation"
                input-id="animate-on-scoll-animation"
                :options="animationOptions"
                option-label="label"
                size="small"
                class="w-44"
                @change="rerender()"
            />
        </div>
    </DemoSettings>

    <DemoGroup>
        <div>
            <div class="flex flex-col items-center gap-2">
                <span class="text-xl font-medium">Scroll Down</span>
                <span class="slidedown-icon h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <i class="pi pi-arrow-down" />
                </span>
            </div>

            <div class="h-[30rem]" />

            <div
                v-if="!isRerendering"
                v-animateonscroll="{
                    enterClass: `animate-${selectedAnimation.in}`,
                    leaveClass: `animate-${selectedAnimation.out}`
                }"
                class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000"
            >
                <span class="text-3xl font-bold">{{ selectedAnimation.label }}</span>
            </div>
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    type AnimationOption = {
        label: string;
        in: string;
        out: string;
    }

    const isRerendering = ref(false);

    const animationOptions: Array<AnimationOption> = [
        { label: 'Fade In', in: 'fadein', out: 'fadeout' },
        { label: 'Fade In Left', in: 'fadeinleft', out: 'fadeoutleft' },
        { label: 'Fade In Right', in: 'fadeinright', out: 'fadeoutright' },
        { label: 'Zoom', in: 'zoomin', out: 'fadeout' },
        { label: 'Flip Left', in: 'flipleft', out: 'fadeout' },
        { label: 'Flip Up', in: 'flipup', out: 'fadeout' },
        { label: 'Scale In', in: 'scalein', out: 'fadeout' },
    ];

    const selectedAnimation = ref<AnimationOption>(animationOptions[0]);

    const rerender = () => {
        isRerendering.value = true;
        setTimeout(() => isRerendering.value = false, 1);
    };

</script>

<style scoped>
    @keyframes slidedown-icon {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(20px);
        }

        100% {
            transform: translateY(0);
        }
    }

    .slidedown-icon {
        animation: slidedown-icon;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
</style>
