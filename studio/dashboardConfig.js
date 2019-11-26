export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ddd95a33ae8da81744c20a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ffzks85f',
                  apiId: '89aea303-9cc4-4e55-9bea-5d10afa59264'
                },
                {
                  buildHookId: '5ddd95a35c54c35195199591',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sfitqngq',
                  apiId: 'f5dc6f0d-4c4c-4518-ae4b-6a02a0ca8fcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ananixdevops/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sfitqngq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
