import { PortableTextBlock } from "sanity";
import { SanityImage } from "./SanityImage";

export type Portfolio = {

    _type: 'portfolio';

    _id: string;

    _createdAt: Date;

    name: string;

    image: string;

    description: string;

    URL: string

    /*name: string;

    slug: string;

    highlight: boolean;

    industries: string[];

    image1: SanityImage;

    image2: SanityImage;

    image3: SanityImage;

    image4: SanityImage;

    founder1: string;

    founder2: string;

    founder3: string;

    founder4: string;

    website: string;

    content: PortableTextBlock[];*/
}