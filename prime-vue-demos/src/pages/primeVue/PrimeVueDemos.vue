<template>
    <div class="flex gap-6 items-start">
        <div class="demo-menu">
            <Menu
                :model="menuItems"
            />
        </div>

        <div class="grow text-center">
            <div class="demo-container">
                <ComponentDemo
                    v-for="demo in demos"
                    :key="demo.url"
                    :demo="demo"
                    class="mb-6"
                />

                <ScrollTop />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, reactive } from 'vue';
    import { MenuItem } from 'primevue/menuitem';
    import { DemoItem } from '../../models/demoItem.model';
    import ComponentDemo from '../../components/ComponentDemo.vue';
    import { RouteNames } from '../../router/';
    import { useRouter } from 'vue-router';

    // Buttons
    import ButtonDemo from './components/button/ButtonDemo.vue';
    import SpeedDialDemo from './components/button/SpeedDialDemo.vue';
    import SplitButtonDemo from './components/button/SplitButtonDemo.vue';

    // Data
    import DataTableDemo from './components/data/DataTableDemo.vue';
    import DataViewDemo from './components/data/DataViewDemo.vue';
    import OrderListDemo from './components/data/OrderListDemo.vue';
    import OrganizationChartDemo from './components/data/OrganizationChartDemo.vue';
    import PaginatorDemo from './components/data/PaginatorDemo.vue';
    import PicklistDemo from './components/data/PicklistDemo.vue';
    import TimelineDemo from './components/data/TimelineDemo.vue';
    import TreeDemo from './components/data/TreeDemo.vue';
    import TreeTableDemo from './components/data/TreeTableDemo.vue';
    import VirtualScrollerDemo from './components/data/VirtualScrollerDemo.vue';

    // File
    import FileUploadDemo from './components/file/FileUploadDemo.vue';

    // Forms
    import AutoCompleteDemo from './components/form/AutoCompleteDemo.vue';
    import CascadeSelectDemo from './components/form/CascadeSelectDemo.vue';
    import CheckboxDemo from './components/form/CheckboxDemo.vue';
    import ColorPickerDemo from './components/form/ColorPickerDemo.vue';
    import DatePickerDemo from './components/form/DatePickerDemo.vue';
    import EditorDemo from './components/form/EditorDemo.vue';
    import FloatLabelDemo from './components/form/FloatLabelDemo.vue';
    import IconFieldDemo from './components/form/IconFieldDemo.vue';
    import IftaLabelDemo from './components/form/IftaLabelDemo.vue';
    import InputGroupDemo from './components/form/InputGroupDemo.vue';
    import InputMaskDemo from './components/form/InputMaskDemo.vue';
    import InputNumberDemo from './components/form/InputNumberDemo.vue';
    import InputOtpDemo from './components/form/InputOtpDemo.vue';
    import InputTextDemo from './components/form/InputTextDemo.vue';
    import KeyFilterDemo from './components/form/KeyFilterDemo.vue';
    import KnobDemo from './components/form/KnobDemo.vue';
    import ListBoxDemo from './components/form/ListBoxDemo.vue';
    import MultiSelectDemo from './components/form/MultiSelectDemo.vue';
    import PasswordDemo from './components/form/PasswordDemo.vue';
    import RadioButtonDemo from './components/form/RadioButtonDemo.vue';
    import RatingDemo from './components/form/RatingDemo.vue';
    import SelectDemo from './components/form/SelectDemo.vue';
    import SelectButtonDemo from './components/form/SelectButtonDemo.vue';
    import SliderDemo from './components/form/SliderDemo.vue';
    import TextAreaDemo from './components/form/TextAreaDemo.vue';
    import ToggleButtonDemo from './components/form/ToggleButtonDemo.vue';
    import ToggleSwitchDemo from './components/form/ToggleSwitchDemo.vue';
    import TreeSelectDemo from './components/form/TreeSelectDemo.vue';

    // Messages
    import MessageDemo from './components/messages/MessageDemo.vue';
    import ToastDemo from './components/messages/ToastDemo.vue';

    // Misc
    import AnimateOnScrollDemo from './components/misc/AnimateOnScrollDemo.vue';
    import AvatarDemo from './components/misc/AvatarDemo.vue';
    import BadgeDemo from './components/misc/BadgeDemo.vue';
    import BlockUiDemo from './components/misc/BlockUiDemo.vue';
    import ChipDemo from './components/misc/ChipDemo.vue';

    // Panels
    import AccordionDemo from './components/panel/AccordionDemo.vue';
    import CardDemo from './components/panel/CardDemo.vue';
    import DeferredDemo from './components/panel/DeferredDemo.vue';
    import DividerDemo from './components/panel/DividerDemo.vue';
    import FieldsetDemo from './components/panel/FieldsetDemo.vue';
    import PanelDemo from './components/panel/PanelDemo.vue';
    import ScrollPanelDemo from './components/panel/ScrollPanelDemo.vue';
    import SplitterDemo from './components/panel/SplitterDemo.vue';
    import StepperDemo from './components/panel/StepperDemo.vue';
    import TabsDemo from './components/panel/TabsDemo.vue';
    import ToolbarDemo from './components/panel/ToolbarDemo.vue';

    const router = useRouter();

    const demos = reactive<Array<DemoItem>>([
        {
            label: 'Buttons',
            url: '#buttons-demos',
            items: [
                { label: 'Button', url: 'button', docsUrl: 'https://primevue.org/button/', demoComponent: ButtonDemo },
                { label: 'Speed Dial', url: 'speed-dial', docsUrl: 'https://primevue.org/speeddial/', demoComponent: SpeedDialDemo },
                { label: 'Split Button', url: 'split-button', docsUrl: 'https://primevue.org/splitbutton/', demoComponent: SplitButtonDemo },
            ]
        },
        {
            label: 'Data',
            url: '#data-demos',
            items: [
                { label: 'DataTable', url: 'datatable', docsUrl: 'https://primevue.org/datatable/', demoComponent: DataTableDemo },
                { label: 'DataView', url: 'dataview', docsUrl: 'https://primevue.org/dataview/', demoComponent: DataViewDemo },
                { label: 'OrderList', url: 'orderlist', docsUrl: 'https://primevue.org/orderlist/', demoComponent: OrderListDemo },
                { label: 'OrgChart', url: 'orgchart', docsUrl: 'https://primevue.org/organizationchart/', demoComponent: OrganizationChartDemo },
                { label: 'Paginator', url: 'paginator', docsUrl: 'https://primevue.org/paginator/', demoComponent: PaginatorDemo },
                { label: 'PickList', url: 'picklist', docsUrl: 'https://primevue.org/picklist/', demoComponent: PicklistDemo },
                { label: 'Timeline', url: 'timeline', docsUrl: 'https://primevue.org/timeline/', demoComponent: TimelineDemo},
                { label: 'Tree', url: 'tree', docsUrl: 'https://primevue.org/tree/', demoComponent: TreeDemo},
                { label: 'TreeTable', url: 'treetable', docsUrl: 'https://primevue.org/treetable/', demoComponent: TreeTableDemo },
                { label: 'VirtualScroller', url: 'virtualscroller', docsUrl: 'https://primevue.org/virtualscroller/', demoComponent: VirtualScrollerDemo },
            ]
        },
        {
            label: 'File',
            url: '#file-demos',
            items: [
                { label: 'Upload', url: 'file-upload-demo', docsUrl: 'https://primevue.org/fileupload/', demoComponent: FileUploadDemo },
            ]
        },
        {
            label: 'Form',
            url: '#form-demos',
            items: [
                { label: 'AutoComplete', url: 'autocomplete-demo', docsUrl: 'https://primevue.org/autocomplete/', demoComponent: AutoCompleteDemo },
                { label: 'CascadeSelect', url: 'cascade-select-demo', docsUrl: 'https://primevue.org/cascadeselect/', demoComponent: CascadeSelectDemo },
                { label: 'Checkbox', url: 'checkbox-demo', docsUrl: 'https://primevue.org/checkbox/', demoComponent: CheckboxDemo },
                { label: 'ColorPicker', url: 'color-picker-demo', docsUrl: 'https://primevue.org/colorpicker/', demoComponent: ColorPickerDemo },
                { label: 'DatePicker', url: 'date-picker-demo', docsUrl: 'https://primevue.org/datepicker/', demoComponent: DatePickerDemo },
                { label: 'Editor', url: 'editor-demo', docsUrl: 'https://primevue.org/editor/', demoComponent: EditorDemo },
                { label: 'FloatLabel', url: 'float-label-demo', docsUrl: 'https://primevue.org/floatlabel/', demoComponent: FloatLabelDemo },
                { label: 'IconField', url: 'icon-field-demo', docsUrl: 'https://primevue.org/iconfield/', demoComponent: IconFieldDemo },
                { label: 'IftaLabel', url: 'ifta-label-demo', docsUrl: 'https://primevue.org/iftalabel/', demoComponent: IftaLabelDemo },
                { label: 'InputGroup', url: 'input-group-demo', docsUrl: 'https://primevue.org/inputgroup/', demoComponent: InputGroupDemo },
                { label: 'InputMask', url: 'input-mask-demo', docsUrl: 'https://primevue.org/inputmask/', demoComponent: InputMaskDemo },
                { label: 'InputNumber', url: 'input-number-demo', docsUrl: 'https://primevue.org/inputnumber/', demoComponent: InputNumberDemo },
                { label: 'InputOtp', url: 'input-otp-demo', docsUrl: 'https://primevue.org/inputotp/', demoComponent: InputOtpDemo },
                { label: 'InputText', url: 'input-text-demo', docsUrl: 'https://primevue.org/inputtext/', demoComponent: InputTextDemo },
                { label: 'KeyFilter', url: 'keyfilter-demo', docsUrl: 'https://primevue.org/keyfilter/', demoComponent: KeyFilterDemo },
                { label: 'Knob', url: 'knob-demo', docsUrl: 'https://primevue.org/knob/', demoComponent: KnobDemo },
                { label: 'ListBox', url: 'listbox-demo', docsUrl: 'https://primevue.org/listbox/', demoComponent: ListBoxDemo },
                { label: 'MultiSelect', url: 'multiselect-demo', docsUrl: 'https://primevue.org/multiselect/', demoComponent: MultiSelectDemo },
                { label: 'Password', url: 'password-demo', docsUrl: 'https://primevue.org/password/', demoComponent: PasswordDemo },
                { label: 'RadioButton', url: 'radio-button-demo', docsUrl: 'https://primevue.org/radiobutton/', demoComponent: RadioButtonDemo },
                { label: 'Rating', url: 'rating-demo', docsUrl: 'https://primevue.org/rating/', demoComponent: RatingDemo },
                { label: 'Select', url: 'select-demo', docsUrl: 'https://primevue.org/select/', demoComponent: SelectDemo },
                { label: 'SelectButton', url: 'select-button-demo', docsUrl: 'https://primevue.org/selectbutton/', demoComponent: SelectButtonDemo },
                { label: 'Slider', url: 'slider-demo', docsUrl: 'https://primevue.org/slider/', demoComponent: SliderDemo },
                { label: 'TextArea', url: 'textarea-demo', docsUrl: 'https://primevue.org/textarea/', demoComponent: TextAreaDemo },
                { label: 'ToggleButton', url: 'toggle-button-demo', docsUrl: 'https://primevue.org/togglebutton/', demoComponent: ToggleButtonDemo },
                { label: 'ToggleSwitch', url: 'toggle-switch-demo', docsUrl: 'https://primevue.org/toggleswitch/', demoComponent: ToggleSwitchDemo },
                { label: 'TreeSelect', url: 'tree-select-demo', docsUrl: 'https://primevue.org/treeselect/', demoComponent: TreeSelectDemo },
            ]
        },
        {
            label: 'Messages',
            url: '#messages-demos',
            items: [
                { label: 'Message', url: 'message-demo', docsUrl: 'https://primevue.org/message/', demoComponent: MessageDemo },
                { label: 'Toast', url: 'toast-demo', docsUrl: 'https://primevue.org/toast/', demoComponent: ToastDemo},
            ]
        },
        {
            label: 'Misc',
            url: '#misc-demos',
            items: [
                { label: 'AnimateOnScroll', url: 'animate-on-scroll', docsUrl: 'https://primevue.org/animateonscroll/', demoComponent: AnimateOnScrollDemo},
                { label: 'Avatar', url: 'avatar', docsUrl: 'https://primevue.org/avatar/', demoComponent: AvatarDemo },
                { label: 'Badge', url: 'badge', docsUrl: 'https://primevue.org/badge/', demoComponent: BadgeDemo },
                { label: 'BlockUI', url: 'blockui', docsUrl: 'https://primevue.org/blockui/', demoComponent: BlockUiDemo},
                { label: 'Chip', url: 'chip', docsUrl: 'https://primevue.org/chip/', demoComponent: ChipDemo},
            ]
        },
        {
            label: 'Panels',
            url: '#panel-demos',
            items: [
                { label: 'Accordion', url: 'accordion-demo', docsUrl: 'https://primevue.org/accordion/', demoComponent: AccordionDemo},
                { label: 'Card', url: 'card-demo', docsUrl: 'https://primevue.org/card/', demoComponent: CardDemo},
                { label: 'Deferred', url: 'deferred-demo', docsUrl: 'https://primevue.org/deferredcontent/', demoComponent: DeferredDemo},
                { label: 'Divider', url: 'divider-demo', docsUrl: 'https://primevue.org/divider/', demoComponent: DividerDemo},
                { label: 'Fieldset', url: 'fieldset-demo', docsUrl: 'https://primevue.org/fieldset/', demoComponent: FieldsetDemo},
                { label: 'Panel', url: 'panel-demo', docsUrl: 'https://primevue.org/panel/', demoComponent: PanelDemo},
                { label: 'ScrollPanel', url: 'scrollpanel-demo', docsUrl: 'https://primevue.org/scrollpanel/', demoComponent: ScrollPanelDemo},
                { label: 'Splitter', url: 'splitter-demo', docsUrl: 'https://primevue.org/splitter/', demoComponent: SplitterDemo},
                { label: 'Stepper', url: 'stepper-demo', docsUrl: 'https://primevue.org/stepper/', demoComponent: StepperDemo},
                { label: 'Tabs', url: 'tabs-demo', docsUrl: 'https://primevue.org/tabs/', demoComponent: TabsDemo},
                { label: 'Toolbar', url: 'toolbar-demo', docsUrl: 'https://primevue.org/toolbar/', demoComponent: ToolbarDemo},
            ]
        }

    ]);

    const menuItems = computed<Array<MenuItem>>(() => demos.map(x => {
        return {
            label: x.label,
            items: x.items.map(y => {
                return {
                    label: y.label,
                    command: () => {
                        router.push({
                            name: RouteNames.DEMOS_PRIMEVUE,
                            hash: `#${y.url}`
                        });
                    }
                }
            })
        }
    }))
</script>

<style scoped>
    .demo-menu {
        height: calc(100vh - 160px);
        overflow-y: auto;
        scrollbar-width: thin;
        min-width: 15rem;

        position: sticky;
        top: 0;
        text-align: center;
    }

    .demo-container {
        width: 100%;
        height: calc(100vh - 160px);
        overflow-y: auto;
        scrollbar-width: thin;
        position: relative;
    }
</style>
