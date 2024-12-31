
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="showHeader" input-id="card-show-header" binary />
            <label for="card-show-header">Header</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showTitle" input-id="card-show-title" binary />
            <label for="card-show-title">Title</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showSubtitle" input-id="card-show-subtitle" binary />
            <label for="card-show-subtitle">Subtitle</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showContent" input-id="card-show-content" binary />
            <label for="card-show-content">Content</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="showFooter" input-id="card-show-footer" binary />
            <label for="card-show-footer">Footer</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <Card class="text-left" style="width: 25rem; overflow: hidden">
            <template v-if="showHeader" #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png">
            </template>

            <template v-if="showTitle" #title>
                Advanced Card
            </template>

            <template v-if="showSubtitle" #subtitle>
                Card subtitle
            </template>

            <template v-if="showContent" #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>

            <template v-if="showFooter" #footer>
                <div class="flex gap-4 mt-1">
                    <Button
                        label="Cancel"
                        severity="secondary"
                        outlined
                        class="w-full"
                    />
                    <Button label="Save" class="w-full" />
                </div>
            </template>
        </Card>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const showHeader = ref(false);
    const showTitle = ref(true);
    const showSubtitle = ref(false);
    const showContent = ref(true);
    const showFooter = ref(false);
</script>
