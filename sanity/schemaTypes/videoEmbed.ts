import { defineField, defineType } from "sanity";

export const videoEmbedType = defineType({
  name: "videoEmbed",
  title: "Video embed",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Video URL",
      type: "url",
      description: "YouTube, Vimeo, Loom, or Dailymotion link. Other URLs show as a link preview.",
      validation: (rule) =>
        rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "title",
      title: "Accessible title",
      type: "string",
      description: "Short label for screen readers (e.g. “Product demo walkthrough”).",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  preview: {
    select: { url: "url", title: "title" },
    prepare({ url, title }) {
      return {
        title: title || "Video embed",
        subtitle: url ? String(url).slice(0, 60) : "",
      };
    },
  },
});
