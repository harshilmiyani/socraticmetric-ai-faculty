import { groq } from "next-sanity";

const publishedPostFilter = `_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))`;

export const postsListQuery = groq`
  *[${publishedPostFilter}] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    category,
    authorName,
    authorRole,
    mainImage
  }
`;

export const postBySlugQuery = groq`
  *[${publishedPostFilter} && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    category,
    authorName,
    authorRole,
    mainImage,
    "body": body[]{
      _type == "image" => {
        _key,
        _type,
        alt,
        caption,
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        }
      },
      _type != "image" => @
    }
  }
`;

export const postSlugsQuery = groq`
  *[${publishedPostFilter}].slug.current
`;

/** Slug + timestamps for sitemap `lastmod` (published when set, else last doc update). */
export const postsSitemapQuery = groq`
  *[${publishedPostFilter}]{
    "slug": slug.current,
    "lastModified": coalesce(publishedAt, _updatedAt)
  }
`;
