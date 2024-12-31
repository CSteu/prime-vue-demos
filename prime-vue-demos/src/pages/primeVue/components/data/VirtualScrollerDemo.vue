<template>
    <DemoSettings>
        <div class="flex items-center gap-1">
            <label for="virtual-scroller-delay">
                Delay:
            </label>
            <InputNumber
                v-model="delayMs"
                input-id="virtual-scroller-delay"
                placeholder="Delay"
                show-buttons
                :step="50"
                :min="0"
                suffix="ms"
                fluid
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="virtual-scroller-delay">
                Item Size:
            </label>
            <InputNumber
                v-model="itemSize"
                input-id="virtual-scroller-item-size"
                show-buttons
                :step="10"
                :min="0"
                fluid
            />
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showLoader" input-id="virtual-scroller-loader" binary />
            <label for="virtual-scroller-loader">Show Loader</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Basic
            </div>
            <VirtualScroller
                :items="items"
                :item-size="itemSize"
                :delay="delayMs"
                :show-loader="showLoader"
                class="border border-surface-200 rounded"
                style="width: 200px; height: 200px"
            >
                <template #item="{ item, options }">
                    <div
                        :class="['flex items-center p-2', { 'bg-surface-100': options.odd }]"
                        style="height: 50px"
                    >
                        {{ item }}
                    </div>
                </template>
            </VirtualScroller>
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Horizontal
            </div>
            <VirtualScroller
                :items="items"
                :item-size="itemSize"
                orientation="horizontal"
                :delay="delayMs"
                :show-loader="showLoader"
                :pt="{ content: 'flex flex-row' }"
                class="border border-surface-200 rounded"
                style="width: 200px; height: 200px"
            >
                <template #item="{ item, options }">
                    <div
                        :class="['flex items-center p-2', { 'bg-surface-100': options.odd }]"
                        style="width: 50px; writing-mode: vertical-lr;"
                    >
                        {{ item }}
                    </div>
                </template>
            </VirtualScroller>
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Grid
            </div>
            <VirtualScroller
                :items="gridItems"
                :item-size="[itemSize, itemSize]"
                orientation="both"
                :delay="delayMs"
                class="border border-surface-200 rounded"
                style="width: 200px; height: 200px"
            >
                <template #item="{ item, options }">
                    <div
                        :class="['flex items-center p-2', { 'bg-surface-100': options.odd }]"
                        style="height: 50px"
                    >
                        <template v-for="(el, index) of item" :key="index">
                            <div style="width: 100px">
                                {{ el }}
                            </div>
                        </template>
                    </div>
                </template>
            </VirtualScroller>
        </div>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                Lazy
            </div>
            <VirtualScroller
                :items="lazyItems"
                :item-size="itemSize"
                :show-loader="showLoader"
                :delay="delayMs"
                :loading="lazyLoading"
                lazy
                class="border border-surface-200 rounded"
                style="width: 200px; height: 200px"
                @lazy-load="onLazyLoad"
            >
                <template #item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100': options.odd }]" style="height: 50px">
                        {{ item }}
                    </div>
                </template>
            </VirtualScroller>
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import VirtualScroller from 'primevue/virtualscroller';

    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const items = ref(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));
    const itemSize = ref(50);
    const gridItems = ref(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`)));

    const delayMs = ref(250);
    const showLoader = ref(false);

    // lazy
    const lazyItems = ref(Array.from({ length: 10000 }));
    const lazyLoading = ref(false);
    const loadLazyTimeout = ref();
    const onLazyLoad = (event) => {
        lazyLoading.value = true;

        if (loadLazyTimeout.value) {
            clearTimeout(loadLazyTimeout.value);
        }

        //imitate delay of a backend call
        loadLazyTimeout.value = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems.value];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = `Item #${i}`;
            }

            lazyItems.value = _lazyItems;
            lazyLoading.value = false;

        }, Math.random() * 1000 + 250);
    };
</script>