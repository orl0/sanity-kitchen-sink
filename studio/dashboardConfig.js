export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6130e3fb2dcf0ce46f71f716',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sa5ru1wj',
                  apiId: '657f5187-fe07-4b9b-a678-463992146d89'
                },
                {
                  buildHookId: '6130e3fb47f71df353e11c9b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hgj75pqm',
                  apiId: '335e6ec3-a8c8-40eb-92ca-8ebaf27c550e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orl0/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hgj75pqm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
