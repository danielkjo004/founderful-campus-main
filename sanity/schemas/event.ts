const event = {
    name: 'event',
    title: 'Events',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Event Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
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
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'Sdatetime',
            title: 'Starting Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },

        },
        {
            name: 'Edatetime',
            title: 'Ending Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },

        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'highlight',
            title: 'Highlight',
            type: 'boolean',
            initialValue: false,
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
            validation: (Rule: any) =>
                Rule.custom((value: any, context: any) => {
                    // Access the document data using context.parent
                    const highlightValue = context.parent && context.parent.highlight;

                    // Perform the conditional validation
                    if (highlightValue && !value) {
                        return 'Image is required when highlight is true';
                    }

                    // If validation passes, return true or omit the return statement
                    return true;
                }),
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

export default event;