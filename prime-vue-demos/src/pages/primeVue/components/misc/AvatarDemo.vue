<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isCircle" input-id="avatar-circle" binary />
            <label for="avatar-circle">Circle</label>
        </div>

        <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedType"
                    input-id="avatar-type-label"
                    name="selectedType"
                    value="label"
                />
                <label for="avatar-type-label">Label</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedType"
                    input-id="avatar-type-icon"
                    name="selectedType"
                    value="icon"
                />
                <label for="avatar-type-icon">Icon</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="selectedType"
                    input-id="avatar-type-image"
                    name="selectedType"
                    value="image"
                />
                <label for="avatar-type-image">Image</label>
            </div>
        </div>
    </DemoSettings>

    <DemoGroup>
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <Avatar
                    :label="labelValue(0)"
                    :icon="iconValue(0)"
                    :image="imageValue(0)"
                    :shape="selectedShape"
                    size="xlarge"
                    class="mr-2"
                />

                <Avatar
                    :label="labelValue(1)"
                    :icon="iconValue(1)"
                    :image="imageValue(1)"
                    :shape="selectedShape"
                    size="large"
                    class="mr-2"
                    style="background-color: #ece9fc; color: #2a1261"
                />

                <Avatar
                    :label="labelValue(2)"
                    :icon="iconValue(2)"
                    :image="imageValue(2)"
                    :shape="selectedShape"
                    class="mr-2"
                    style="background-color: #dee9fc; color: #1a2551"
                />

                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar
                        :label="labelValue(3)"
                        :icon="iconValue(3)"
                        :image="imageValue(3)"
                        :shape="selectedShape"
                        size="xlarge"
                    />
                </OverlayBadge>
            </div>
        </div>
    </DemoGroup>

    <DemoGroup title="AvatarGroup">
        <AvatarGroup>
            <Avatar
                v-for="i in 5"
                :key="i"
                :label="labelValue(i-1)"
                :icon="iconValue(i-1)"
                :image="imageValue(i-1)"
                :shape="selectedShape"
            />
            <Avatar label="+2" :shape="selectedShape" />
        </AvatarGroup>
    </DemoGroup>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import AvatarGroup from 'primevue/avatargroup';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const selectedType = ref('label');

    const isCircle = ref(false);
    const labelValue = computed(() => (index: number) => selectedType.value === 'label' ? labels[index] : undefined);
    const iconValue = computed(() => (index: number) => selectedType.value === 'icon' ? icons[index] : undefined);
    const imageValue = computed(() => (index: number) => selectedType.value === 'image' ? images[index] : undefined);

    const labels = ['P', 'G', 'A', 'V', 'E'];
    const icons = ['pi pi-user', 'pi pi-bell', 'pi pi-calendar', 'pi pi-envelope', 'pi pi-search'];

    const images = [
        'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png'
    ];

    const selectedShape = computed(() => isCircle.value ? 'circle' : 'square');

</script>
