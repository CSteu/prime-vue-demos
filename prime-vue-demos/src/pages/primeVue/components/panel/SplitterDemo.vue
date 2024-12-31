
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox
                v-model="isVertical"
                input-id="splitter-vertical"
                binary
            />
            <label for="splitter-vertical">Vertical</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox
                v-model="isMinSize"
                input-id="splitter-min-size"
                binary
            />
            <label for="splitter-min-size">Min Size</label>
        </div>
    </DemoSettings>

    <div class="flex justify-center">
        <Message
            severity="info"
            icon="pi pi-info-circle"
        >
            Configured to save state in SessionStorage.
        </Message>
    </div>

    <DemoGroup title="Basic">
        <Splitter
            :layout="isVertical ? 'vertical' : undefined"
            style="height: 300px"
            state-key="uiPlayground_SplitterDemoState_Basic"
            state-storage="session"
            class="w-full"
        >
            <SplitterPanel
                :min-size="minSize"
                class="flex items-center justify-center"
            >
                Panel 1
            </SplitterPanel>

            <SplitterPanel
                :min-size="minSize"
                class="flex items-center justify-center"
            >
                Panel 2
            </SplitterPanel>
        </Splitter>
    </DemoGroup>

    <DemoGroup title="Nested">
        <Splitter
            state-key="uiPlayground_SplitterDemoState_Nested1"
            state-storage="session"
            style="height: 300px"
            class="w-full"
        >
            <SplitterPanel
                :size="20"
                :min-size="minSize"
                class="flex items-center justify-center"
            >
                Panel 1
            </SplitterPanel>

            <SplitterPanel :size="80">
                <Splitter
                    layout="vertical"
                    state-key="uiPlayground_SplitterDemoState_Nested2"
                    state-storage="session"
                >
                    <SplitterPanel
                        :size="15"
                        :min-size="minSize"
                        class="flex items-center justify-center"
                    >
                        Panel 2
                    </SplitterPanel>

                    <SplitterPanel
                        :size="85"
                        :min-size="minSize"
                    >
                        <Splitter
                            state-key="uiPlayground_SplitterDemoState_Nested3"
                            state-storage="session"
                        >
                            <SplitterPanel
                                :size="20"
                                :min-size="minSize"
                                class="flex items-center justify-center"
                            >
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel
                                :size="80"
                                :min-size="minSize"
                                class="flex items-center justify-center"
                            >
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </DemoGroup>
</template>

<script setup>
    import Splitter from 'primevue/splitter';
    import SplitterPanel from 'primevue/splitterpanel';

    import { ref, computed } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isVertical = ref(false);
    const isMinSize= ref(false);

    const minSize = computed(() => isMinSize.value ? 15 : undefined);
</script>
