
<template>
    <DemoGroup align-y="top">
        <div class="flex flex-col items-center gap-2 mx-4">
            <div class="font-bold">
                Severity
            </div>
            <div class="flex gap-2 justify-center">
                <Badge value="2" />
                <Badge value="6" severity="secondary" />
                <Badge value="8" severity="success" />
                <Badge value="4" severity="info" />
                <Badge value="9" severity="warn" />
                <Badge value="3" severity="danger" />
                <Badge value="5" severity="contrast" />
            </div>
        </div>

        <div class="flex flex-col items-center gap-2 mx-4">
            <div class="font-bold">
                Size
            </div>

            <div class="flex gap-2 justify-center items-center">
                <Badge value="8" size="xlarge" severity="success" />
                <Badge value="6" size="large" severity="warn" />
                <Badge value="4" severity="info" />
                <Badge value="2" size="small" />
            </div>
        </div>

        <div class="flex flex-col items-center gap-2 mx-4">
            <div class="font-bold">
                Overlay
            </div>
            <div class="flex gap-6 justify-center pt-2">
                <OverlayBadge value="2">
                    <i class="pi pi-bell text-3xl" />
                </OverlayBadge>

                <OverlayBadge value="4" severity="danger">
                    <i class="pi pi-calendar text-3xl" />
                </OverlayBadge>

                <OverlayBadge severity="danger">
                    <i class="pi pi-envelope text-3xl" />
                </OverlayBadge>
            </div>
        </div>
    </DemoGroup>
</template>

<script setup>
    import DemoGroup from '../../../../components/DemoGroup.vue';
</script>
