
<template>
    <div class="flex gap-4 justify-around text-left">
        <DemoGroup title="Horizontal" :full-width="false" class="basis-[50rem]">
            <Stepper value="1" class="w-full">
                <StepList>
                    <Step value="1">
                        Header I
                    </Step>
                    <Step value="2">
                        Header II
                    </Step>
                    <Step value="3">
                        Header III
                    </Step>
                </StepList>
                <StepPanels>
                    <StepPanel v-slot="{ activateCallback }" value="1">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content I
                            </div>
                        </div>
                        <div class="flex pt-6 justify-end">
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                icon-pos="right"
                                @click="activateCallback('2')"
                            />
                        </div>
                    </StepPanel>
                    <StepPanel v-slot="{ activateCallback }" value="2">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content II
                            </div>
                        </div>
                        <div class="flex pt-6 justify-between">
                            <Button
                                label="Back"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                @click="activateCallback('1')"
                            />
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                icon-pos="right"
                                @click="activateCallback('3')"
                            />
                        </div>
                    </StepPanel>
                    <StepPanel v-slot="{ activateCallback }" value="3">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content III
                            </div>
                        </div>
                        <div class="pt-6">
                            <Button
                                label="Back"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                @click="activateCallback('2')"
                            />
                        </div>
                    </StepPanel>
                </StepPanels>
            </Stepper>
        </DemoGroup>

        <Divider layout="vertical" />

        <DemoGroup title="Vertical" :full-width="false" class="basis-[50rem]">
            <Stepper value="1" :full-width="false" class="w-full">
                <StepItem value="1">
                    <Step>Header I</Step>
                    <StepPanel v-slot="{ activateCallback }">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content I
                            </div>
                        </div>
                        <div class="py-6">
                            <Button label="Next" @click="activateCallback('2')" />
                        </div>
                    </StepPanel>
                </StepItem>
                <StepItem value="2">
                    <Step>Header II</Step>
                    <StepPanel v-slot="{ activateCallback }">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content II
                            </div>
                        </div>
                        <div class="flex py-6 gap-2">
                            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                            <Button label="Next" @click="activateCallback('3')" />
                        </div>
                    </StepPanel>
                </StepItem>
                <StepItem value="3">
                    <Step>Header III</Step>
                    <StepPanel v-slot="{ activateCallback }">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium">
                                Content III
                            </div>
                        </div>
                        <div class="py-6">
                            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                        </div>
                    </StepPanel>
                </StepItem>
            </Stepper>
        </DemoGroup>
    </div>
</template>



<script lang="ts" setup>
    import Stepper from 'primevue/stepper';
    import StepList from 'primevue/steplist';
    import StepPanels from 'primevue/steppanels';
    import StepItem from 'primevue/stepitem';
    import Step from 'primevue/step';
    import StepPanel from 'primevue/steppanel';
    import DemoGroup from '../../../../components/DemoGroup.vue';
</script>