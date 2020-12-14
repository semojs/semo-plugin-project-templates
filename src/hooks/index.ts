import { UtilsType } from '@semo/core'

export default (Utils: UtilsType) => {
  return {
    hook_create_project_template: new Utils.Hook('semo', {
      'semo-starter-backend-typescript': {
        name: 'Semo inside application backend starter',
        description: 'Semo inside backend starter in typescript.',
        tags: ['backend'],
        repo: 'https://github.com/semojs/semo-starter-backend-typescript'
      },
      'semo-starter-application-simple-typescript': {
        name: 'Simple backend typescript starter',
        description: 'A tiny simple Semo project with typescript and Semo.',
        tags: ['backend'],
        repo: 'https://github.com/semojs/semo-starter-application-simple-typescript.git'
      },
      'semo-starter-frontend-typescript': {
        name: 'Simple frontend typescript starter',
        description: 'A simple webpack typescript starter for frontend developers.',
        tags: ['frontend'],
        repo: 'https://github.com/semojs/semo-starter-frontend-typescript.git'
      },
    })
  }
}