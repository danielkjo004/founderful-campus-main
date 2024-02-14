const portfolioswiper = {
    name: 'portfolioswiper',
    type: 'document',
    title: 'Swiper Pictures',
    fields: [
        {
            name: 'title',
            title: 'Title',
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

    ]
}

export default portfolioswiper;