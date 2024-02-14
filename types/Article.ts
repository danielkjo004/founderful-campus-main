import { PortableTextBlock } from "sanity";

export type Article = {

    _type: 'article';

    _id: string;

    _createdAt: string;

    title: string;

    slug: string;

    subtitle: string;

    date: string;
    hour: string;
    location: string;

    highlight: boolean;

    image: string;

    content: PortableTextBlock[];
}