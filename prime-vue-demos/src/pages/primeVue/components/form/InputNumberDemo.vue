<template>
    <DemoSettings
        v-model:invalid="isInvalid"
        v-model:disabled="isDisabled"
    />

    <DemoGroup title="Numerals">
        <div>
            <div class="font-bold">
                Integer Only
            </div>
            <InputNumber
                v-model="numeralsVal1"
                input-id="integeronly"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="without-grouping" class="font-bold">
                Without Grouping
            </label>
            <InputNumber
                v-model="numeralsVal2"
                input-id="without-grouping"
                :use-grouping="false"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="decimal-precision" class="font-bold">
                Decimal Precision
            </label>
            <InputNumber
                v-model="numeralsVal3"
                input-id="decimal-precision"
                :min-fraction-digits="2"
                :max-fraction-digits="5"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
            <Message
                size="small"
                severity="secondary"
                variant="simple"
            >
                Between 2 and 5 decimal places
            </Message>
        </div>

        <div>
            <label for="min-max" class="font-bold">
                Min/Max
            </label>
            <InputNumber
                v-model="numeralsVal4"
                input-id="min-max"
                :min="0"
                :max="100"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
            <Message
                size="small"
                severity="secondary"
                variant="simple"
                :invalid="isInvalid"
                :disabled="isDisabled"
            >
                Between 0 and 100
            </Message>
        </div>
    </DemoGroup>

    <DemoGroup title="Buttons">
        <div class="flex items-center gap-2">
            <label for="vertical-buttons" class="font-bold">
                Vertical
            </label>
            <InputNumber
                v-model="verticalVal"
                input-id="vertical-buttons"
                show-buttons
                button-layout="vertical"
                style="width: 3rem"
                :min="0"
                :max="99"
                :invalid="isInvalid"
                :disabled="isDisabled"
            >
                <template #decrementicon>
                    <span class="material-icons">remove</span>
                </template>
                <template #incrementicon>
                    <span class="material-icons">add</span>
                </template>
            </InputNumber>
        </div>

        <div>
            <label for="stacked-buttons" class="font-bold">
                Stacked
            </label>
            <InputNumber
                v-model="stackedVal"
                input-id="stacked-buttons"
                show-buttons
                mode="currency"
                currency="USD"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="minmax-buttons" class="font-bold">
                Min/Max
            </label>

            <InputNumber
                v-model="minMaxVal"
                input-id="minmax-buttons"
                mode="decimal"
                show-buttons
                :min="0"
                :max="100"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
            <Message
                size="small"
                severity="secondary"
                variant="simple"
            >
                Between 0 and 100
            </Message>
        </div>

        <div>
            <label for="horizontal-buttons" class="font-bold">
                Horizontal w/ Step
            </label>

            <InputNumber
                v-model="horizVal"
                input-id="horizontal-buttons"
                show-buttons
                button-layout="horizontal"
                :step="0.25"
                mode="currency"
                currency="USD"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            >
                <template #decrementicon>
                    <span class="material-icons">remove</span>
                </template>
                <template #incrementicon>
                    <span class="material-icons">add</span>
                </template>
            </InputNumber>
        </div>
    </DemoGroup>

    <DemoGroup title="Currency">
        <div>
            <label for="currency-us" class="font-bold">
                United States
            </label>
            <InputNumber
                v-model="currVal1"
                input-id="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="currency-germany" class="font-bold">Germany</label>
            <InputNumber
                v-model="currVal2"
                input-id="currency-germany"
                mode="currency"
                currency="EUR"
                locale="de-DE"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
        <div>
            <label for="currency-india" class="font-bold"> India </label>
            <InputNumber
                v-model="currVal3"
                input-id="currency-india"
                mode="currency"
                currency="INR"
                currency-display="code"
                locale="en-IN"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
        <div>
            <label for="currency-japan" class="font-bold">Japan</label>
            <InputNumber
                v-model="currVal4"
                input-id="currency-japan"
                mode="currency"
                currency="JPY"
                locale="jp-JP"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>

    <DemoGroup title="Prefix/Suffix">
        <div>
            <label for="mile" class="font-bold"> Miles </label>
            <InputNumber
                v-model="mileVal"
                input-id="mile"
                suffix=" mi"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="percent" class="font-bold"> Percent </label>
            <InputNumber
                v-model="percentVal"
                input-id="percent"
                suffix="%"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="expiry" class="font-bold"> Expiry </label>
            <InputNumber
                v-model="expiryVal"
                input-id="expiry"
                prefix="Expires in "
                suffix=" days"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>

        <div>
            <label for="temperature" class="font-bold"> Temperature </label>
            <InputNumber
                v-model="tempVal"
                input-id="temperature"
                prefix="&uarr; "
                suffix="℃"
                :min="0"
                :max="40"
                fluid
                :invalid="isInvalid"
                :disabled="isDisabled"
            />
        </div>
    </DemoGroup>
</template>

<script setup lang="ts">
    import DemoGroup from '../../../../components/DemoGroup.vue';
    import { ref } from 'vue';
    import DemoSettings from '../../../../components/DemoSettings.vue';

    const numeralsVal1 = ref(42723);
    const numeralsVal2 = ref(58151);
    const numeralsVal3 = ref(2351.35);
    const numeralsVal4 = ref(50);

    const isInvalid = ref(false);
    const isDisabled = ref(false);

    const stackedVal = ref(20);
    const minMaxVal = ref(25);
    const horizVal = ref(10.5);
    const verticalVal = ref(50);

    const currVal1 = ref(1500);
    const currVal2 = ref(2500);
    const currVal3 = ref(4250);
    const currVal4 = ref(5002);

    const mileVal = ref(20);
    const percentVal = ref(50);
    const expiryVal = ref(10);
    const tempVal = ref(20);

</script>
