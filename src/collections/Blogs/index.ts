import { CollectionConfig } from 'payload'

const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // Make sure 'media' is the correct slug for your Media collection
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // Make sure 'users' is the correct slug for your Users collection
    },
    {
      name: 'flexibleContent',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [
        {
          slug: 'textBlock',
          fields: [
            {
              name: 'text',
              type: 'richText',
            },
          ],
        },
        {
          slug: 'imageBlock',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
        {
          slug: 'quoteBlock',
          fields: [
            {
              name: 'quote',
              type: 'textarea',
            },
            {
              name: 'author',
              type: 'text',
            },
          ],
        },
        {
          slug: 'tableBlock',
          fields: [
            {
              name: 'table',
              type: 'array',
              fields: [
                {
                  name: 'row',
                  type: 'array',
                  fields: [
                    {
                      name: 'cell',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default BlogPosts
