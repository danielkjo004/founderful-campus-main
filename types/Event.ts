import { PortableTextBlock } from "sanity";

export type Event = {

    _type: 'event';

    _id: string;

    _createdAt: string;

    title: string;

    slug: string;

    description: string;

    Sdatetime: string;
    Edatetime: string;

    location: string;

    highlight: boolean;

    image: string;

    content: PortableTextBlock[];
}