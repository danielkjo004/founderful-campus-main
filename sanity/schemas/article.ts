import { Article } from '@/types/Article';

const article = {
    name: 'article',
    title: 'Articles',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            dateFormat: 'YYYY-MM-DD'

        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'highlight',
            title: 'Highlight',
            type: 'boolean',
            initialValue: false,
            description: "Please make sure you only have a maximum of 3 articles highlighted.",
            validation: (Rule: any) => Rule.custom((highlight: boolean, context: { document: Article }) => {
                const existingHighlights = context.document._id
                    ? (context.document._id.split(' ') as unknown as Article[]).filter(node => node._type === 'article' && node.highlight === true)
                    : [];
                if (highlight && existingHighlights.length >= 3) {
                    return 'You can only have a maximum of 3 articles highlighted.';
                }
                return true;
            }),
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
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ],
};

export default article;