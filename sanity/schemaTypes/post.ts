import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      description:
        "Shown on the site and used for ordering. After you publish, the public blog refreshes within about a minute.",
    }),
    defineField({
      name: "readTime",
      title: "Read time label",
      type: "string",
      description: 'e.g. "5 min read"',
      initialValue: "5 min read",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "Thought Leadership",
    }),
    defineField({
      name: "authorName",
      title: "Author name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authorRole",
      title: "Author role",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt text",
              description: "Important for accessibility and SEO",
              validation: (rule) => rule.warning("Alt text is recommended"),
            }),
            defineField({
              name: "caption",
              type: "string",
              title: "Caption",
            }),
          ],
        }),
        defineArrayMember({
          type: "videoEmbed",
          title: "Video embed",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
    prepare({ title, subtitle }) {
      return { title: title ?? "Untitled", subtitle: subtitle ? String(subtitle).slice(0, 10) : "" };
    },
  },
});
