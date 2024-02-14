'use client'

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "1wd08itv",

    dataset: "production",

    title: 'Founderful',

    apiVersion: "2023-09-12",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }
})

export default config;