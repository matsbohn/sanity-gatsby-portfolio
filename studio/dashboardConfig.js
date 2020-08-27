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
                  buildHookId: '5f475395bd7b19dde9e0d76d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rvcmdmd9',
                  apiId: '77bb1081-abd2-4d1c-983d-fe3f7347b2d8'
                },
                {
                  buildHookId: '5f4753955c2911886069b9e7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2k1quo8m',
                  apiId: 'a167fa58-7c36-4a36-bcd6-9468b4a03e3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matsbohn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2k1quo8m.netlify.app',
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
