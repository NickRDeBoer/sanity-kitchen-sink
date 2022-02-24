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
                  buildHookId: '6217d0708e268d009b176f27',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ygy1sf7h',
                  apiId: '66b97a35-2bc0-4361-9c86-4a615b00f3bd'
                },
                {
                  buildHookId: '6217d0704c1dbb006f82aaf4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-niu11ba3',
                  apiId: 'e6f3659e-ec86-45ef-ac34-aaf7b12d053b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickRDeBoer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-niu11ba3.netlify.app', category: 'apps'}
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
