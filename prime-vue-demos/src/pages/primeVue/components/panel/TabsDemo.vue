<template>
    <DemoSettings v-model:disabled="isDisabled">
        <div class="flex items-center gap-2">
            <Checkbox v-model="isScrollable" input-id="tabs-scrollable" binary />
            <label for="tabs-scrollable">Scrollable</label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="showNavigators" input-id="tabs-navigators" binary />
            <label for="tabs-navigators">Navigators</label>
        </div>

        <div class="flex items-center gap-1">
            <label for="tabs-count">
                Tabs:
            </label>
            <InputNumber
                v-model="tabCount"
                input-id="tabs-count"
                show-buttons
                :step="1"
                :min="0"
                fluid
                class="w-44"
            />
        </div>
    </DemoSettings>

    <DemoGroup>
        <Tabs
            value="0"
            :scrollable="isScrollable"
            :show-navigators="showNavigators"
            class="max-w-3xl"
        >
            <TabList>
                <Tab
                    v-for="tab in tabs"
                    :key="tab.title"
                    :value="tab.value"
                    :disabled="isDisabled"
                >
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">
                        {{ tab.content }}
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </DemoGroup>
</template>

<script setup lang="ts">
    import Tabs from 'primevue/tabs';
    import TabList from 'primevue/tablist';
    import Tab from 'primevue/tab';
    import TabPanels from 'primevue/tabpanels';
    import TabPanel from 'primevue/tabpanel';

    import { computed, ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const tabCount = ref(5);
    const tabs = computed(() => Array.from({ length: tabCount.value }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` })));

    const isScrollable = ref(false);
    const showNavigators = ref(false);
    const isDisabled = ref(false);
</script>

