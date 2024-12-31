<template>
    <Toast />

    <div>
        <div class="text-2xl font-bold mb-4">
            UI Playground - {{ title }}
        </div>

        <router-view />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const title = computed(() => route.meta.title);

</script>
