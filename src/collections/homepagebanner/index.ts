// src/collection/HomepageBanner/index.ts
import { CollectionConfig } from 'payload'

const HomepageBanner: CollectionConfig = {
  slug: 'homepage-banner',
  labels: {
    singular: 'Homepage Banner',
    plural: 'Homepage Banners',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'image', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      label: 'Banner Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Banner Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      label: 'Banner Description',
      type: 'textarea',
    },
    {
      name: 'ctaText',
      label: 'Call to Action Text',
      type: 'text',
    },
    {
      name: 'ctaLink',
      label: 'Call to Action Link',
      type: 'text',
    },
  ],
}

export default HomepageBanner