<template>
    <DemoSettings
        v-model:disabled="isDisabled"
    >
        <div class="flex items-center gap-2">
            <Checkbox v-model="showIcon" input-id="split-button-icon" binary />
            <label for="split-button-icon">Icon</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isRaised" input-id="split-button-raised" binary />
            <label for="split-button-raised">Raised</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isOutlined" input-id="split-button-outlined" binary />
            <label for="split-button-outlined">Outlined</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isText" input-id="split-button-text" binary />
            <label for="split-button-text">Text</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isRounded" input-id="split-button-rounded" binary />
            <label for="split-button-text">Rounded</label>
        </div>
    </DemoSettings>

    <DemoGroup>
        <SplitButton
            label="Save"
            :model="items"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Nested"
            :model="nestedItems"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>
    </DemoGroup>

    <DemoGroup title="Severity">
        <SplitButton
            label="Secondary"
            :model="items"
            severity="secondary"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Success"
            :model="items"
            severity="success"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Info"
            :model="items"
            severity="info"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>
        <SplitButton
            label="Warn"
            :model="items"
            severity="warn"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Help"
            :model="items"
            severity="help"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Danger"
            :model="items"
            severity="danger"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Contrast"
            :model="items"
            severity="contrast"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>
    </DemoGroup>


    <DemoGroup title="Sizes">
        <SplitButton
            label="Small"
            :model="items"
            size="small"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Normal"
            :model="items"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>

        <SplitButton
            label="Large"
            :model="items"
            size="large"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :disabled="isDisabled"
            @click="save"
        >
            <template v-if="showIcon" #icon>
                <i class="material-icons">save</i>
            </template>
        </SplitButton>
    </DemoGroup>
</template>

<script setup>
    import SplitButton from 'primevue/splitbutton';
    import { ref } from 'vue';
    import { useToast } from 'primevue/usetoast';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    const toast = useToast();

    const isDisabled = ref(false);
    const isRaised = ref(false);
    const isOutlined = ref(false);
    const isText = ref(false);
    const isRounded = ref(false);
    const showIcon = ref(false);


    const items = [
        {
            label: 'Update',
            command: () => {
                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            command: () => {
                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        },
        {
            separator: true
        },
        {
            label: 'Quit',
            command: () => {
                window.location.href = 'https://vuejs.org/';
            }
        }
    ];

    const nestedItems = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    const save = () => {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
    };
</script>
