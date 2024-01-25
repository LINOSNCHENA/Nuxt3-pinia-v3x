// Styles

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";

import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';

export default defineNuxtPlugin(nuxtApp => {

    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            themes: {
                light: {
                    colors: {
                        primary: '#1867C0',
                        secondary: '#5CBBF6',
                    },
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
