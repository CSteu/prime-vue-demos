<template>
    <DemoSettings v-model:disabled="isDisabled">
        <div class="flex items-center gap-2">
            <Checkbox v-model="isRaised" input-id="button-raised" binary />
            <label for="button-raised">Raised</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isOutlined" input-id="button-outlined" binary />
            <label for="button-outlined">Outlined</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isText" input-id="button-text" binary />
            <label for="button-text">Text</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isRounded" input-id="button-rounded" binary />
            <label for="button-text">Rounded</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isLoading" input-id="button-loading" binary />
            <label for="button-loading">Loading</label>
        </div>

        <div class="flex items-center gap-1">
            <InputText
                v-model="badgeValue"
                placeholder="Badge value"
                class="w-44"
            />
        </div>
    </DemoSettings>

    <DemoGroup title="Basic">
        <Button
            label="Basic"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        />
    </DemoGroup>

    <DemoGroup title="Icons">
        <Button
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        >
            <template #icon>
                <i class="material-icons">home</i>
            </template>
        </Button>

        <Button
            label="Icon Left"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        >
            <template #icon>
                <i class="material-icons">person</i>
            </template>
        </Button>

        <Button
            label="Icon Right"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
            icon-pos="right"
        >
            <template #icon>
                <i class="material-icons">save</i>
            </template>
        </Button>

        <Button
            label="Icon Top"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
            icon-pos="top"
        >
            <template #icon>
                <i class="material-icons">search</i>
            </template>
        </Button>

        <Button
            label="Icon Bottom"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
            icon-pos="bottom"
        >
            <template #icon>
                <i class="material-icons">refresh</i>
            </template>
        </Button>
    </DemoGroup>

    <DemoGroup title="Link">
        <Button
            label="Link"
            variant="link"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        />

        <Button
            as="a"
            label="External"
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        />

        <Button
            as="router-link"
            label="Router"
            to="/"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        />
    </DemoGroup>

    <DemoGroup title="Icon Only">
        <div class="flex flex-wrap justify-center gap-6 mb-12">
            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
            >
                <template #icon>
                    <i class="material-icons">check</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="secondary"
            >
                <template #icon>
                    <i class="material-icons">bookmark</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="success"
            >
                <template #icon>
                    <i class="material-icons">search</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="info"
            >
                <template #icon>
                    <i class="material-icons">person</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="warn"
            >
                <template #icon>
                    <i class="material-icons">notifications</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="help"
            >
                <template #icon>
                    <i class="material-icons">favorite</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="danger"
            >
                <template #icon>
                    <i class="material-icons">remove</i>
                </template>
            </Button>

            <Button
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
                severity="contrast"
            >
                <template #icon>
                    <i class="material-icons">star</i>
                </template>
            </Button>
        </div>
    </DemoGroup>

    <DemoGroup title="Sizes">
        <Button
            label="Small"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
            size="small"
        >
            <template #icon>
                <i class="material-icons">check_circle</i>
            </template>
        </Button>

        <Button
            label="Normal"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
        >
            <template #icon>
                <i class="material-icons">check_circle</i>
            </template>
        </Button>

        <Button
            label="Large"
            :outlined="isOutlined"
            :raised="isRaised"
            :text="isText"
            :rounded="isRounded"
            :loading="isLoading"
            :disabled="isDisabled"
            :badge="badge"
            size="large"
        >
            <template #icon>
                <i class="material-icons">check_circle</i>
            </template>
        </Button>
    </DemoGroup>

    <DemoGroup title="ButtonGroup">
        <ButtonGroup>
            <Button
                label="Save"
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
            >
                <template #icon>
                    <i class="material-icons">check</i>
                </template>
            </Button>

            <Button
                label="Delete"
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
            >
                <template #icon>
                    <i class="material-icons">delete</i>
                </template>
            </Button>

            <Button
                label="Cancel"
                :outlined="isOutlined"
                :raised="isRaised"
                :text="isText"
                :rounded="isRounded"
                :loading="isLoading"
                :disabled="isDisabled"
                :badge="badge"
            >
                <template #icon>
                    <i class="material-icons">remove</i>
                </template>
            </Button>
        </ButtonGroup>
    </DemoGroup>
</template>


<script setup lang="ts">
    import { computed, ref } from 'vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const isDisabled = ref(false);
    const isLoading = ref(false);

    const isRaised = ref(false);
    const isOutlined = ref(false);
    const isText = ref(false);
    const isRounded = ref(false);

    const badgeValue = ref<string>();
    const badge = computed(() => badgeValue.value ? badgeValue.value : undefined);

</script>