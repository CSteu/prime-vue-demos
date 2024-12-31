import { Component } from 'vue';

export type DemoItem = {
    label: string;
    url: string;
    icon?: string;
    items?: DemoItem[];

    docsUrl?: string;
    demoComponent?: Component;
}