// schema.js

import { PortableText } from "@portabletext/react";

const meetteam = {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonials',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'hobby',
            title: 'Hobby',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        }
    ],
};

export default meetteam;
