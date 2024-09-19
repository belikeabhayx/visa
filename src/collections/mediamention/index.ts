// src/collection/mediamention/index.ts
import { CollectionConfig } from 'payload'

const MediaLogos: CollectionConfig = {
  slug: 'media-logos',
  labels: {
    singular: 'Media Logo',
    plural: 'Media Logos',
  },
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'logo', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      label: 'Company Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'website',
      label: 'Company Website',
      type: 'text',
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
    },
  ],
}

export default MediaLogos