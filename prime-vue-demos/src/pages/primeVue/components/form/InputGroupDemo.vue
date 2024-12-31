<template>
    <DemoGroup title="Basic">
        <InputGroup class="w-56">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </InputGroup>

        <InputGroup class="w-56">
            <InputText placeholder="Keyword" />
            <InputGroupAddon>
                <Button
                    icon="pi pi-search"
                    severity="secondary"
                    variant="text"
                    @click="toggle"
                />
            </InputGroupAddon>
        </InputGroup>

        <Menu
            ref="menu"
            :model="items"
            popup
            class="!min-w-fit"
        />

        <InputGroup class="w-56">
            <InputGroupAddon>
                <Button icon="pi pi-check" />
            </InputGroupAddon>
            <InputText placeholder="Vote" />
            <InputGroupAddon>
                <Button icon="pi pi-times" />
            </InputGroupAddon>
        </InputGroup>
    </DemoGroup>

    <DemoGroup title="w/ Button">
        <InputGroup class="w-56">
            <InputGroupAddon>
                <i class="pi pi-user" />
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" />
        </InputGroup>

        <InputGroup class="w-56">
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber v-model="number" placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup class="w-56">
            <InputGroupAddon>www</InputGroupAddon>
            <InputText v-model="text2" placeholder="Website" />
        </InputGroup>

        <InputGroup class="w-56">
            <InputGroupAddon>
                <i class="pi pi-map" />
            </InputGroupAddon>
            <Select
                v-model="selectedCity"
                :options="cities"
                option-label="name"
                placeholder="City"
            />
        </InputGroup>
    </DemoGroup>

    <DemoGroup title="w/ Checkbox & Radio">
        <InputGroup class="w-56">
            <InputText placeholder="Price" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </InputGroupAddon>
        </InputGroup>

        <InputGroup class="w-56">
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup class="w-56">
            <InputGroupAddon>
                <Checkbox v-model="checked2" :binary="true" />
            </InputGroupAddon>
            <InputText placeholder="Website" />
            <InputGroupAddon>
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </InputGroupAddon>
        </InputGroup>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    // Basic InputGroup
    const text1 = ref(null);
    const text2 = ref(null);
    const number = ref(null);
    const selectedCity = ref();
    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);

    // InputGroup w/ Button
    const menu = ref();
    const items = ref([{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }]);

    const toggle = (event) => {
        menu.value.toggle(event);
    };

    // InputGroup w/ Checkbox & Radio
    const checked1 = ref(false);
    const checked2 = ref(false);
    const radioValue1 = ref('');
    const radioValue2 = ref('');
</script>