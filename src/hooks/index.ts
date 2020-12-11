import { UtilsType } from '@semo/core'

export default (Utils: UtilsType) => {
  return {
    hook_create_project_template: new Utils.Hook('semo', {
      semo_application_backend_starter: {
        name: 'Semo application backend starter',
        description: 'Semo inside backend starter in typescript.',
        tags: ['backend'],
        repo: 'https://github.com/semojs/semo-starter-backend-typescript'
      },
      semo_simple_backend_typescript_starter: {
        name: 'Semo simple backend typescript project',
        description: 'A tiny simple Semo project with typescript.',
        tags: ['backend'],
        repo: 'https://github.com/semojs/semo-starter-application-simple-typescript.git'
      },
    })
  }
}