const portfolio = {
    name: 'portfolio',
    type: 'document',
    title: 'Portfolio',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'URL',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

    ]
}

export default portfolio;