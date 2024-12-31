<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isRemovable" input-id="chip-removable" binary />
            <label for="chip-removable">Removable</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showIcon" input-id="chip-icon" binary />
            <label for="chip-icon">Icon</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showImage" input-id="chip-image" binary />
            <label for="chip-image">Image</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="flex flex-wrap gap-2">
            <Chip
                label="Action"
                :removable="isRemovable"
                :icon="getIcon(0)"
                :image="getImage(0)"
            />
            <Chip
                label="Comedy"
                :removable="isRemovable"
                :icon="getIcon(1)"
                :image="getImage(1)"
            />
            <Chip
                label="Mystery"
                :removable="isRemovable"
                :icon="getIcon(2)"
                :image="getImage(2)"
            />
            <Chip
                label="Thriller"
                :removable="isRemovable"
                :icon="getIcon(3)"
                :image="getImage(3)"
            />
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isRemovable = ref(false);
    const showIcon = ref(false);
    const showImage = ref(false);

    const icons = ['pi pi-apple', 'pi pi-facebook', 'pi pi-google', 'pi pi-microsoft'];
    const images = [
        'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png'
    ];

    const getIcon = computed(() => (index: number) => showIcon.value ? icons[index] : undefined);
    const getImage = computed(() => (index: number) => showImage.value ? images[index] : undefined);
</script>
