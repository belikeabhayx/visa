import { CollectionConfig } from 'payload'

const MediaLogos: CollectionConfig = {
  slug: 'media-logos', // The slug will be used for the API endpoint
  labels: {
    singular: 'Media Logo',
    plural: 'Media Logos',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'src', 'href', 'updatedAt'],
  },
  access: {
    read: () => true, // Allow public access to read
    create: ({ req: { user } }) => !!user, // Only logged-in users can create
    update: ({ req: { user } }) => !!user, // Only logged-in users can update
    delete: ({ req: { user } }) => !!user, // Only logged-in users can delete
  },
  fields: [
    {
      name: 'src',
      label: 'Image Source',
      type: 'upload', // Use 'upload' to store image files
      relationTo: 'media', // Assuming you have a media collection
      required: true,
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      label: 'Link',
      type: 'text',
      required: true,
    },
  ],
}

export default MediaLogos;
