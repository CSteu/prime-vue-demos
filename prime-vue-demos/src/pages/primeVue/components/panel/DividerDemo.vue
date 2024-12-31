<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox
                v-model="isVertical"
                input-id="divider-vertical"
                binary
                @change="setDefaultContentPosition"
            />
            <label for="divider-vertical">Vertical</label>
        </div>
        <div class="flex items-center gap-2">
            <label for="divider-type-select">Type: </label>
            <Select
                v-model="dividerType"
                input-id="divider-type-select"
                :options="types"
                option-label="label"
                option-value="value"
                placeholder="Normal"
                size="small"
                class="w-32"
            />
        </div>

        <div class="flex items-center gap-1">
            <label for="divider-show-content">Show Content: </label>
            <Checkbox v-model="showContent" input-id="divider-show-content" binary />
            <Select
                v-model="selectedPosition"
                :options="positions"
                option-label="label"
                option-value="value"
                size="small"
                :disabled="!showContent"
                class="w-44"
            />
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="flex" :class="!isVertical ? 'flex-col' : 'flex-row'">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <Divider
                :type="dividerType"
                :layout="dividerLayout"
                :align="selectedPosition"
                :class="isVertical ? 'flex' : ''"
            >
                <template v-if="showContent">
                    Content
                </template>
            </Divider>

            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import {computed, ref} from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    // layout
    const isVertical = ref(true);
    const dividerLayout = computed<'vertical' | 'horizontal'>(() => isVertical.value ? 'vertical' : undefined);

    // type
    const dividerType = ref<'solid' | 'dotted' | 'dashed'>('solid');
    const types = ref([
        { label: 'Solid', value: 'solid' },
        { label: 'Dotted', value: 'dotted' },
        { label: 'Dashed', value: 'dashed' },
    ]);

    // content
    const showContent = ref(false);
    const selectedPosition = ref<'center' | 'left' | 'right' | 'top' | 'bottom'>('center');
    const positions = computed(() => isVertical.value
        ? [ { label: 'Top', value: 'top' }, { label: 'Center', value: 'center' }, { label: 'Bottom', value: 'bottom' }]
        : [ { label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }]
    );

    const setDefaultContentPosition = () => selectedPosition.value = 'center';
</script>
