const hsg = {
    name: 'hsg',
    title: 'HSG members',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'enterprise',
            title: 'Enterprise',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
            validation: (Rule: any) =>
                Rule.uri({
                    allowRelative: false, // Do not allow relative URLs
                    host: ['linkedin.com'], // Allow only LinkedIn URLs
                }),
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

export default hsg;