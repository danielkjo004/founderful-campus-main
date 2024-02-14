import { VC } from "@/types/VC";
import { HQ } from "@/types/HQ";
import { Eth } from "@/types/Eth";
import { Epfl } from "@/types/Epfl";
import { Portfolio } from "@/types/Portfolio";
import { Testimonial } from "@/types/Testimonial";
import { Member } from "@/types/Member";
import { Article } from "@/types/Article";
import { createClient, groq } from "next-sanity";
import clientConfig from "./client-config";
import { Hsg } from "@/types/Hsg";
import { Event } from "@/types/Event";
import { SuccessStory } from "@/types/SuccessStory";
import { PortfolioSwiper } from "@/types/PortfolioSwiper";
import { Partner } from "@/types/Partner";

export async function getVCs(): Promise<VC[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "vc"] | order(_createdAt desc) {
            _id,
            _createdAt,
            title,
            "image": image.asset->url,
        }`
    )
}

export async function getHqs(): Promise<HQ[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "hq"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            enterprise,
            role,
            linkedin,
            "image": image.asset->url,
        }`
    )
}

export async function getEths(): Promise<Eth[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "eth"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            enterprise,
            role,
            linkedin,
            "image": image.asset->url,
        }`
    )
}

export async function getEpfls(): Promise<Epfl[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "epfl"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            enterprise,
            role,
            linkedin,
            "image": image.asset->url,
        }`
    )
}

export async function getHsgs(): Promise<Hsg[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "hsg"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            enterprise,
            role,
            linkedin,
            "image": image.asset->url,
        }`
    )
}

export async function getPortfolioSwiper(): Promise<PortfolioSwiper[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "portfolioswiper"] | order(_createdAt asc) {
            _id,
            _createdAt,
            title,
            "image": image.asset->url,
        }`
    )
}

export async function getPortfolio(): Promise<Portfolio[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "portfolio"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            description,
            URL,
            "image": image.asset->url,
        }`
    )
}

export async function getTestimonials(): Promise<Testimonial[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "testimonial"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            hobby,
            "image": image.asset->url,
            alt,
            quote,
        }`
    )
}

export async function getSuccessStories(): Promise<SuccessStory[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "successStories"] | order(_createdAt asc) {
            _id,
            _createdAt,
            author,
            quote,
            region,
            "image": image.asset->url,
        }`
    )
}


export async function getEvents(): Promise<Event[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "event"] | order(_createdAt asc) {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            description,
            Sdatetime,
            Edatetime,
            location,
            highlight,
            "image": image.asset->url,
            content,
        }`
    )
}

export async function getPartners(): Promise<Partner[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "partner"] | order(_createdAt asc) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            role,
            "image": image.asset->url,
            alt,
        }`
    )
}





















// DELETE BELOW

export async function getHighlightedCompanies() {
    const client = createClient(clientConfig);

    // First, get the highlighted companies
    const highlightedCompanies = await client.fetch(
        groq`*[_type == "portfolio" && highlight == true] | order(_createdAt asc) [0...7] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            industries,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "image4": image4,
            website,
            content
      }`
    );

    // If there are fewer than 7 highlighted companies, get the remaining non-highlighted companies
    if (highlightedCompanies.length < 7) {
        const remainingCount = 7 - highlightedCompanies.length;
        const nonHighlightedCompanies = await client.fetch(
            groq`*[_type == "portfolio" && highlight != true] | order(_createdAt asc) [0...${remainingCount - 1}] {
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                industries,
                "image1": image1,
                "image2": image2,
                "image3": image3,
                "image4": image4,
                website,
                content
        }`
        );
        // Concatenate the highlighted and non-highlighted articles and return the result
        return highlightedCompanies.concat(nonHighlightedCompanies);
    }

    // If there are 3 or more highlighted articles, simply return them
    return highlightedCompanies;
}

export async function getCompany(slug: string): Promise<Portfolio> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "portfolio" && slug.current == $slug][0] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            industries,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "image4": image4,
            "founder1": image1.alt,
            "founder2": image2.alt,
            "founder3": image3.alt,
            "founder4": image4.alt,
            website,
            content
        }`,
        { slug }
    )
}



export async function getTeam(): Promise<Member[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "member"] | order(_createdAt) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            role,
            "image": image.asset->url,
            email,
            linkedin,
            content
        }`
    )
}

export async function getMember(slug: string): Promise<Member> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "member" && slug.current == $slug][0] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            role,
            "image": image.asset->url,
            email,
            linkedin,
            content
        }`,
        { slug }
    )
}


export async function getArticleReadMore(slug: string): Promise<Article[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "article" && slug.current != $slug] | order(_createdAt desc) [0...2] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            subtitle,
            highight,
            "image": image.asset->url,
            content
        }`,
        { slug }
    )
}

export async function getBlockViewSetting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "Block View"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ1Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "So, who are Founderful?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ2Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "And when do you invest?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ3Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "And how do you invest in companies?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ4Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "How do I receive funding?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ5Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "What’s your approach as lead investor?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ6Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "How did you choose your specific market?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}

export async function getFAQ7Setting(): Promise<boolean> {

    const query = '*[_type == "setting" && option == "Why join the Founderful family?"]{Enabled}[0]';
    const result = await createClient(clientConfig).fetch(query);

    return result?.Enabled || false;
}
