<template>
    <DemoGroup title="General">
        <Message>
            Basic Message
        </Message>

        <Message>
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            <span class="ml-2">Message with icon</span>
        </Message>
    </DemoGroup>

    <DemoGroup title="Variants">
        <Message variant="outlined">
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            <span class="ml-2">Outlined Message</span>
        </Message>

        <Message variant="simple">
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            <span class="ml-2">Simple Message</span>
        </Message>
    </DemoGroup>

    <DemoGroup title="Temporary/Dynamic">
        <Message closable>
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            <span class="ml-2">Closeable Message</span>
        </Message>

        <div class="flex flex-col gap-2">
            <Button
                label="Show Disappearing Message"
                :disabled="disappearingMessageVisible"
                @click="showDisappearingMessage()"
            />
            <Message
                v-if="disappearingMessageVisible"
                severity="success"
                :life="3000"
            >
                Disappears in 3 seconds
            </Message>
        </div>

        <div class="flex flex-col gap-2">
            <div class="flex gap-2">
                <Button label="Show" @click="addMessages()" />
                <Button label="Clear" severity="secondary" @click="clearMessages()" />
            </div>
            <transition-group name="p-message" tag="div" class="flex flex-col gap-1">
                <Message
                    v-for="msg of messages"
                    :key="msg.id"
                    :severity="msg.severity"
                >
                    {{ msg.content }}
                </Message>
            </transition-group>
        </div>
    </DemoGroup>

    <DemoGroup title="Severity">
        <Message severity="success">
            Success Message
        </Message>
        <Message severity="info">
            Info Message
        </Message>
        <Message severity="warn">
            Warn Message
        </Message>
        <Message severity="error">
            Error Message
        </Message>
        <Message severity="secondary">
            Secondary Message
        </Message>
        <Message severity="contrast">
            Contrast Message
        </Message>
    </DemoGroup>


    <DemoGroup title="Size">
        <Message size="small">
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            Small Message
        </Message>

        <Message>
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            Normal Message
        </Message>

        <Message size="large">
            <template #icon>
                <i class="material-icons">send</i>
            </template>
            Large Message
        </Message>
    </DemoGroup>
</template>

<script setup>
    import { ref } from 'vue';
    import DemoGroup from '../../../../components/DemoGroup.vue';

    const disappearingMessageVisible = ref(false);

    const showDisappearingMessage = () => {
        disappearingMessageVisible.value = true;

        setTimeout(() => {
            disappearingMessageVisible.value = false;
        }, 4000);
    };

    // Dynamic Messages
    const messages = ref([]);
    const count = ref(0);
    const addMessages = () => {
        messages.value.push({ severity: 'info', content: 'Dynamic Info Message', id: count.value++ });
        messages.value.push({ severity: 'success', content: 'Dynamic Success Message', id: count.value++ });
        messages.value.push({ severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ });
    };
    const clearMessages = () => messages.value = [];

</script>