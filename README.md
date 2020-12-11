# semo-plugin-project-templates

This is a Semo plugins which provide more project templates, may or may not related with Semo.

This is also a demo to show how keep your awesome project template using Semo in your organization.

Just use one Semo hook to do this.

```typescript
export default (Utils) => {
  return {
    hook_create_project_template: new Utils.Hook('semo', {
      project_key: {
        name: 'A good name',
        description: 'A good description.',
        tags: ['tagtag'],
        repo: 'git repo url'
      }
  }
}
```

## Usage

```
semo create PROJECT_NAME --template
semo create PROJECT_NAME -T
semo create PROJECT_NAME --template --tag tagtag

```

## Plan

My plan is to keep my nodejs project templates in this repo, so maybe it's not that useful for you. So to be a demo, you can create your own template projects plugin or put the hook code in your local machine.

## Another way to do this.

You can also register your project template info in your local machine global Semo config file.

```
# ~/.semo/.semorc.yml

$plugin:
  semo:
    create:
      repos:
        backend_nest_one:
          repo: git repo url
          name: A good name
          description: A good description
          tags: [tagtag]

```

## Licence
MIT