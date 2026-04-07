import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./post";
import { videoEmbedType } from "./videoEmbed";

export const schemaTypes: SchemaTypeDefinition[] = [postType, videoEmbedType];
