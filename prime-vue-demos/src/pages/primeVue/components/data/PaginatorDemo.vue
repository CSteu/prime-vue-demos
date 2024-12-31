
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="showCustomStart" input-id="paginator-custom-start" binary />
            <label for="paginator-custom-start">Custom Start Content</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showCustomEnd" input-id="paginator-custom-end" binary />
            <label for="paginator-custom-end">Custom End Content</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showCustomTemplate" input-id="paginator-custom-template" binary />
            <label for="paginator-custom-template">Custom Template</label>
        </div>
    </DemoSettings>

    <DemoGroup title="Standard">
        <Paginator
            :rows="10"
            :total-records="120"
            :rows-per-page-options="[10, 20, 30]"
            :template="template"
        >
            <template v-if="showCustomStart" #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template v-if="showCustomEnd" #end>
                <Button type="button">
                    <template #icon>
                        <i class="material-icons">search</i>
                    </template>
                </Button>
            </template>
        </Paginator>
    </DemoGroup>

    <DemoGroup title="Headless">
        <Paginator :rows="10" :total-records="120">
            <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                    <Button
                        rounded
                        text
                        :disabled="page === 0"
                        @click="prevPageCallback"
                    >
                        <template #icon>
                            <i class="material-icons">chevron_left</i>
                        </template>
                    </Button>

                    <div class="text-color font-medium">
                        <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                        <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                    </div>

                    <Button
                        rounded
                        text
                        :disabled="page === pageCount - 1"
                        @click="nextPageCallback"
                    >
                        <template #icon>
                            <i class="material-icons">chevron_right</i>
                        </template>
                    </Button>
                </div>
            </template>
        </Paginator>
    </DemoGroup>
</template>

<script setup>
    import Paginator from 'primevue/paginator';
    import { ref, computed } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const showCustomStart = ref(false);
    const showCustomEnd = ref(false);
    const showCustomTemplate = ref(false);

    const template = computed(() => showCustomTemplate.value
        ? 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
        : undefined);
</script>
