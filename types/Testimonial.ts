import { PortableTextBlock } from "sanity";

export type Testimonial = {

    _type: 'testimonial';

    _id: string;

    _createdAt: Date;

    name: string;

    slug: string;

    hobby: string;

    image: string;

    quote: string;
}