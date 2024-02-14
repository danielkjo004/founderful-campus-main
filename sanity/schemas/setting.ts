const setting = {
    name:  'setting',
    title: 'Settings',
    type: 'document',

    fields: [
        {
            name: 'option',
            title: 'Option',
            type: 'string'
        },
        {
            name: 'Enabled',
            title: 'Enabled',
            type: 'boolean',
            initialValue: false,
        },
        
    ],
};

export default setting;