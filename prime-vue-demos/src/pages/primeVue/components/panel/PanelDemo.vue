
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox
                v-model="isToggleable"
                input-id="fieldset-toggleable"
                binary
            />
            <label for="fieldset-toggleable">Toggleable</label>
        </div>

        <ToggleButton
            v-model="isCollapsed"
            on-label="Collapsed"
            off-label="Expanded"
            size="small"
        />
    </DemoSettings>

    <DemoGroup>
        <Panel
            v-model:collapsed="isCollapsed"
            header="Header"
            :toggleable="isToggleable"
            class="w-full"
        >
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isToggleable = ref(false);
    const isCollapsed = ref(false);
</script>
