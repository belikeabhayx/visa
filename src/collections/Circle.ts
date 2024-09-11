import type { CollectionConfig } from 'payload'

export const Circle: CollectionConfig = {
  slug: 'circle',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
