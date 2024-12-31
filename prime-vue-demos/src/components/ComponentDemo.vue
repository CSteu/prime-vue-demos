<template>
    <Panel
        :id="props.demo.url"
        :header="props.demo.label"
        toggleable
        :pt="{
            root: {
                class: 'border elevation-3',
                style: 'border-color: #ccc'
            },
            headerActions: { class: 'flex items-center' },
        }"
        class="w-full"
    >
        <template #icons>
            <Button
                v-if="props.demo.docsUrl"
                as="a"
                :href="props.demo.docsUrl"
                variant="link"
                target="_blank"
                rel="noopener"
                title="Show Documentation"
            >
                <template #icon>
                    <i class="material-icons">description</i>
                </template>
            </Button>
        </template>


        <div class="flex flex-col gap-4">
            <Component
                :is="{...props.demo.demoComponent}"
                v-if="props.demo.demoComponent"
            />

            <ComponentDemo
                v-for="item in props.demo.items"
                :key="item.url"
                :demo="item"
            />
        </div>
    </Panel>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { DemoItem } from '../models/demoItem.model';

    const props = defineProps({
        demo: { type: Object as PropType<DemoItem>, required: true }
    })
</script>