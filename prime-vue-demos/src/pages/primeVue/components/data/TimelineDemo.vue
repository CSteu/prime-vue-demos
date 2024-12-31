<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <label for="timeline-alignment">
                Alignment:
            </label>
            <Select
                v-model="selectedAlignment"
                input-id="timeline-alignment"
                :options="alignmentOptions"
                placeholder="Normal"
                class="w-32"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="timeline-layout">
                Layout:
            </label>
            <ToggleButton
                id="timeline-layout"
                v-model="isHorizontal"
                on-label="Horizontal"
                off-label="Vertical"
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showOpposite" input-id="timeline-show-opposite" binary />
            <label for="timeline-show-opposite">Opposite</label>
        </div>



        <div class="flex items-center gap-2">
            <Checkbox v-model="showIcons" input-id="timeline-show-icon" binary />
            <label for="timeline-show-icon">Icons</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Timeline
            :value="events"
            :align="selectedAlignment"
            :layout="layout"
            class="max-w-4xl"
        >
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
            <template v-if="showOpposite" #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">
                    {{ slotProps.item.date }}
                </small>
            </template>
            <template v-if="showIcons" #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i class="material-icons">{{ slotProps.item.icon }}</i>
                </span>
            </template>
        </Timeline>
    </DemoGroup>
</template>

<script setup lang="ts">
    import Timeline from 'primevue/timeline';
    import { computed, ref, watch } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const events = ref([
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'shopping_cart', color: '#9C27B0'},
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'settings', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'shopping_cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'check', color: '#607D8B' }
    ]);

    const alignmentOptions = computed(() => isHorizontal.value
        ? ['top', 'bottom', 'alternate']
        :  ['left', 'right', 'alternate']
    );
    const selectedAlignment = ref<'left' | 'right' | 'alternate' | 'top' | 'bottom'>('left');
    const showIcons = ref(false);
    const showOpposite = ref(false);

    const isHorizontal = ref(false);
    const layout = computed(() => isHorizontal.value ? 'horizontal' : 'vertical');

    watch(() => isHorizontal.value, () => isHorizontal.value ? 'top' : 'left');
</script>