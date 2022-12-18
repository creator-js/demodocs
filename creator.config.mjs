export default {
  variables: {
    root: './src',
    createEmpty: true,
  },
  domains: [
    {
      name: 'components',
      structure: {
        components: {
          shared: '',
          features: {
            $feature: ''
          }
        }
      },
      templates: [
        {
          name: ({ components: { componentName } }) => `${componentName}/${componentName}.tsx`,
          template: '../_templates/components/component.template.mjs'
        },
        {
          name: ({ components: { componentName } }) => `${componentName}/${componentName}.css`,
          template: '../_templates/components/styles.template.mjs'
        },
        // {
        //   name: ({ components: { componentName } }) => `${componentName}/${componentName}.test.tsx`,
        //   template: '../_templates/components/tests.template.mjs'
        // },
        {
          name: ({ components: { componentName } }) => `${componentName}/index.ts`,
          template: '../_templates/components/index.template.mjs'
        },
        {
          name: '../router/index.tsx',
          template: '../_templates/router/index.template.mjs',
          when: ({ components: { filePath } }) => filePath.includes('pages')
        }
      ],
      questions: [
        {
          name: 'componentName',
          message: 'How to name the component?',
          type: 'input',
          validate: (input) => input !== '',
        },
        {
          name: 'componentDetails',
          message: 'What to add to the component?',
          type: 'checkbox',
          choices: [
            {
              name: 'props'
            },
            {
              name: 'children'
            },
            {
              name: 'useLocation'
            },
            {
              name: 'useParams'
            },
            {
              name: 'useNavigate'
            },
            {
              name: 'useState'
            },
            {
              name: 'useEffect'
            },
            {
              name: 'useForm'
            },
            {
              name: 'Outlet'
            }
          ]
        },
        {
          name: 'routePath',
          message: 'What route?',
          type: 'input',
          validate: (input) => input !== '',
          when: (answers) => Object.values(answers).some((v) => v === 'pages')
        }
      ]
    }
  ]
};
