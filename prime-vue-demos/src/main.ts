import './assets/main.css';
import 'material-icons/iconfont/material-icons.css';
import Aura from '@primevue/themes/aura';
import './assets/custom-theme.css';


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ToastService from 'primevue/toastservice';
import 'quill/dist/quill.snow.css';


import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import 'primeicons/primeicons.css';

// PrimeVue components
import Ripple from 'primevue/ripple';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Menu from 'primevue/menu';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import Paginator from 'primevue/paginator';
import Picklist from 'primevue/picklist';
import Timeline from 'primevue/timeline';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import VirtualScroller from 'primevue/virtualscroller';
import FileUpload from 'primevue/fileupload';
import AutoComplete from 'primevue/autocomplete';
import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker';
import DatePicker from 'primevue/calendar';
import Editor from 'primevue/editor';
import FloatLabel from 'primevue/floatlabel';
import InputGroup from 'primevue/inputgroup';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import Slider from 'primevue/slider';
import TextArea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import TreeSelect from 'primevue/treeselect';
import Message from 'primevue/message';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Chip from 'primevue/chip';
import Accordion from 'primevue/accordion';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import Stepper from 'primevue/stepper';
import Tabs from 'primevue/tabview';
import Toolbar from 'primevue/toolbar';

import App from './UiPlayground.vue';
import router from './router';

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{violet.50}',
          100: '{violet.100}',
          200: '{violet.200}',
          300: '{violet.300}',
          400: '{violet.400}',
          500: '{violet.500}',
          600: '{violet.600}',
          700: '{violet.700}',
          800: '{violet.800}',
          900: '{violet.900}',
          950: '{violet.950}'
      }
  }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false,
        },
    },
    Ripple: true,
});

app.use(ToastService);
app.use(createPinia());
app.use(router);

// Register components
app.directive('ripple', Ripple);
app.component('Toast', Toast);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Menu', Menu);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('Paginator', Paginator);
app.component('Picklist', Picklist);
app.component('Timeline', Timeline);
app.component('Tree', Tree);
app.component('TreeTable', TreeTable);
app.component('VirtualScroller', VirtualScroller);
app.component('FileUpload', FileUpload);
app.component('AutoComplete', AutoComplete);
app.component('CascadeSelect', CascadeSelect);
app.component('Checkbox', Checkbox);
app.component('ColorPicker', ColorPicker);
app.component('DatePicker', DatePicker);
app.component('Editor', Editor);
app.component('FloatLabel', FloatLabel);
app.component('InputGroup', InputGroup);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('Password', Password);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Slider', Slider);
app.component('TextArea', TextArea);
app.component('ToggleButton', ToggleButton);
app.component('TreeSelect', TreeSelect);
app.component('Message', Message);
app.component('Avatar', Avatar);
app.component('Badge', Badge);
app.component('Chip', Chip);
app.component('Accordion', Accordion);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Fieldset', Fieldset);
app.component('Panel', Panel);
app.component('ScrollPanel', ScrollPanel);
app.component('Splitter', Splitter);
app.component('Stepper', Stepper);
app.component('Tabs', Tabs);
app.component('Toolbar', Toolbar);

app.mount('#app');
