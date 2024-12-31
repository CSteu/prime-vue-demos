<template>
    <FileUpload
        name="demo[]"
        accept="image/*"
        :max-file-size="props.maxFileSize * 1000"
        :file-limit="props.fileLimit"
        :auto="props.auto"
        :multiple="props.multiple"
        :disabled="props.disabled"
        custom-upload
        @uploader="() => props.customUploader"
        @upload="onTemplatedUpload()"
        @select="onSelectedFiles"
    >
        <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
            <div class="flex flex-wrap justify-between items-center flex-1 gap-6">
                <div class="flex gap-2">
                    <Button
                        rounded
                        outlined
                        severity="secondary"
                        @click="chooseCallback()"
                    >
                        <template #icon>
                            <i class="material-icons">photo_library</i>
                        </template>
                    </Button>
                    <Button
                        rounded
                        outlined
                        severity="success"
                        :disabled="!files || files.length === 0"
                        @click="uploadEvent(uploadCallback)"
                    >
                        <template #icon>
                            <i class="material-icons">upload</i>
                        </template>
                    </Button>
                    <Button
                        rounded
                        outlined
                        severity="danger"
                        :disabled="!files || files.length === 0"
                        @click="clearCallback()"
                    >
                        <template #icon>
                            <i class="material-icons">remove</i>
                        </template>
                    </Button>
                </div>
                <ProgressBar :value="totalSizePercent" :show-value="false" class="md:w-80 h-1 w-full md:ml-auto">
                    <span class="no-wrap">{{ totalSize }}B / 1Mb</span>
                </ProgressBar>
            </div>
        </template>

        <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
            <div class="flex flex-col gap-20 pt-6">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-6">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="p-20 rounded-border flex flex-col border border-surface items-center gap-6">
                            <div>
                                <img
                                    role="presentation"
                                    :alt="file.name"
                                    :src="file['objectURL']"
                                    width="100"
                                    height="50"
                                >
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 no-wrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" severity="warn" />
                            <Button
                                icon="pi pi-times"
                                outlined
                                rounded
                                severity="danger"
                                @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                            >
                                <template #icon>
                                    <i class="material-icons">remove</i>
                                </template>
                            </Button>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-6">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="p-20 rounded-border flex flex-col border border-surface items-center gap-6">
                            <div>
                                <img
                                    role="presentation"
                                    :alt="file.name"
                                    :src="file['objectURL']"
                                    width="100"
                                    height="50"
                                >
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 no-wrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-6" severity="success" />
                            <Button
                                outlined
                                rounded
                                severity="danger"
                                @click="removeUploadedFileCallback(index)"
                            >
                                <template #icon>
                                    <i class="material-icons">remove</i>
                                </template>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #empty>
            <div class="flex items-center justify-center flex-col">
                <i class="material-icons !border-2 !rounded-full !p-8 !text-4xl !text-muted-color">
                    cloud_upload
                </i>
                <p class="mt-12 mb-0">
                    Drag and drop files to here to upload.
                </p>
            </div>
        </template>
    </FileUpload>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { usePrimeVue } from 'primevue/config';
    import { useToast } from 'primevue/usetoast';


    const props = defineProps({
        auto: { type: Boolean, required: true },
        maxFileSize: { type: Number, required: true },
        fileLimit: { type: Number, required: true },
        multiple: { type: Boolean, required: true },
        disabled: { type: Boolean, required: true },
        customUploader: { type: Function, required: true }
    });

    const $primevue = usePrimeVue();
    const toast = useToast();

    const totalSize = ref(0);
    const totalSizePercent = ref(0);
    const selectedFiles = ref([]);

    const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
        removeFileCallback(index);
        totalSize.value -= parseInt(formatSize(file.size));
        totalSizePercent.value = totalSize.value / 10;
    };


    const onSelectedFiles = (event) => {
        selectedFiles.value = event.files;
        selectedFiles.value.forEach((file) => {
            totalSize.value += parseInt(formatSize(file.size));
        });
    };

    const uploadEvent = (callback) => {
        totalSizePercent.value = totalSize.value / 10;
        callback();
    };

    const onTemplatedUpload = () => {
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };

    const formatSize = (bytes) => {
        const kb = 1024;
        const decimalPrecision = 3;

        if (!$primevue.config.locale) {
            return null;
        }

        const sizes = $primevue.config.locale.fileSizeTypes;

        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(kb));
        const formattedSize = parseFloat((bytes / Math.pow(kb, i)).toFixed(decimalPrecision));

        return `${formattedSize} ${sizes[i]}`;
    };
</script>
