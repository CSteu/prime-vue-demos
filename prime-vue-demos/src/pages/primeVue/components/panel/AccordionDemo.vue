
<template>
    <DemoSettings>
        <div class="flex items-center gap-2">
            <Checkbox v-model="isCustomIcon" input-id="accordion-custom-icon" binary />
            <label for="accordion-custom-icon">Custom Icon</label>
        </div>

        <div class="flex items-center gap-2">
            <Checkbox v-model="isMultiple" input-id="accordion-multiple" binary />
            <label for="accordion-multiple">Multiple</label>
        </div>

        <div class="flex items-center gap-2">
            <div>Expand: </div>
            <Button
                rounded
                label="1"
                class="w-8 h-8 p-0"
                :outlined="!isExpanded(0)"
                @click="togglePanel(0)"
            />
            <Button
                rounded
                label="2"
                class="w-8 h-8 p-0"
                :outlined="!isExpanded(1)"
                @click="togglePanel(1)"
            />
            <Button
                rounded
                label="3"
                class="w-8 h-8 p-0"
                :outlined="!isExpanded(2)"
                @click="togglePanel(2)"
            />
        </div>
    </DemoSettings>

    <DemoGroup>
        <Accordion
            v-model:value="expandedPanels"
            :multiple="isMultiple"
            :expand-icon="isCustomIcon ? 'pi pi-plus' : undefined"
            :collapse-icon="isCustomIcon ? 'pi pi-minus' : undefined"
            class="w-full"
        >
            <AccordionPanel :value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel :value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel :value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel :value="3" disabled>
                <AccordionHeader>Header IV (Disabled)</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </DemoGroup>
</template>

<script setup lang="ts">
    import Accordion from 'primevue/accordion';
    import AccordionPanel from 'primevue/accordionpanel';
    import AccordionHeader from 'primevue/accordionheader';
    import AccordionContent from 'primevue/accordioncontent';

    import { ref, watch } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const isCustomIcon = ref(false);
    const isMultiple = ref(false);
    const expandedPanels = ref<Array<number> | number>(0);

    watch(() => isMultiple.value, (newVal: boolean) => expandedPanels.value = !newVal ? null : []);

    const togglePanel = (panelNumber: number) => {
        if (isMultiple.value) {
            expandedPanels.value = (expandedPanels.value as Array<number>).includes(panelNumber)
                ? (expandedPanels.value as Array<number>).filter((val) => val !== panelNumber)
                : [...(expandedPanels.value as Array<number>), panelNumber];
        } else {
            expandedPanels.value = panelNumber;
        }
    };

    const isExpanded = (panelNumber: number) => isMultiple.value
        ? (expandedPanels.value as Array<number>).includes(panelNumber)
        : expandedPanels.value === panelNumber;
</script>
