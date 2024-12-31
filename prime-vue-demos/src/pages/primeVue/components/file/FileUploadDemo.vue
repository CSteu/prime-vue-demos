<template>
    <DemoSettings v-model:disabled="isDisabled">
        <div class="flex items-center gap-2">
            <Checkbox v-model="isAuto" input-id="is-auto" binary />
            <label for="is-auto">Auto</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="allowMultiple" input-id="allow-multiple" binary />
            <label for="allow-multiple">Multiple</label>
        </div>

        <div class="flex items-center gap-2">
            <label for="max-size">Max Size (KB):</label>
            <InputNumber
                v-model="maxSize"
                input-id="max-size"
                show-buttons
                :min="0"
                fluid
                class="max-w-32"
            />
        </div>

        <div class="flex items-center gap-2">
            <label for="file-limit">File Limit:</label>
            <InputNumber
                v-model="fileLimit"
                input-id="file-limit"
                show-buttons
                :min="1"
                fluid
                class="max-w-32"
            />
        </div>
    </DemoSettings>

    <DemoGroup title="Basic">
        <FileUpload
            ref="basicFileUploadRef"
            mode="basic"
            name="basicDemo[]"
            accept="image/*"
            :auto="isAuto"
            :max-file-size="maxSize * 1000"
            :file-limit="fileLimit"
            :multiple="allowMultiple"
            :disabled="isDisabled"
            custom-upload
            @uploader="customUploader"
            @upload="onUploaded"
        />

        <Button
            v-if="!isAuto"
            label="Upload"
            severity="secondary"
            @click="triggerUpload"
        />
    </DemoGroup>

    <DemoGroup title="Advanced">
        <FileUpload
            name="advancedDemo[]"
            accept="image/*"
            :auto="isAuto"
            :max-file-size="maxSize * 1000"
            :file-limit="fileLimit"
            :multiple="true"
            :disabled="isDisabled"
            custom-upload
            @uploader="customUploader"
            @upload="onUploaded"
        >
            <template #empty>
                <span>Drag and drop files to here to upload.</span>
            </template>
        </FileUpload>
    </DemoGroup>

    <DemoGroup title="Template">
        <FileUploadTemplateDemo
            :max-file-size="maxSize"
            :file-limit="fileLimit"
            :auto="isAuto"
            :multiple="allowMultiple"
            :disabled="isDisabled"
            :custom-uploader="customUploader"
        />
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import FileUpload from 'primevue/fileupload';

    import DemoGroup from '@/components/DemoGroup.vue';
    import DemoSettings from '@/components/DemoSettings.vue';

    import { useToast } from 'primevue/usetoast';
    import FileUploadTemplateDemo from './FileUploadTemplateDemo.vue';
    const toast = useToast();

    const isDisabled = ref(false);
    const isAuto = ref(false);
    const allowMultiple = ref(false);
    const maxSize = ref(1000);
    const fileLimit = ref(3);

    const basicFileUploadRef = ref();
    const triggerUpload = () => basicFileUploadRef.value.upload();

    const onUploaded = () => {
        toast.add({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded',
            life: 3000
        });
    };

    const customUploader = () => new Promise((resolve) => setTimeout(() => resolve(), 1000));
</script>
