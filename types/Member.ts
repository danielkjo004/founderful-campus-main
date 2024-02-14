import { PortableTextBlock } from "sanity";

export type Member = {

    _id: string;

    _createdAt: Date;

    name: string;

    slug: string;

    role: string;

    image: string;

    email: string;
    
    linkedin: string;

    content: PortableTextBlock[];
}