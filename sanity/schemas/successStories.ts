import { PortableText } from "@portabletext/react";

const successStories = {
    name: 'successStories',
    title: 'Success Stories',
    type: 'document',

    fields: [
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'string',
        },
        {
            name: 'region',
            title: 'Region',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ],
};

export default successStories;