
# Awfully-Typed

Template to create typescript rotations for https://awful.wtf


## Installation

[Node.js](https://nodejs.org/) \
[Pnpm](https://pnpm.io/installation) \
[Vscode](https://code.visualstudio.com/)

Install dependencies
```bash
  pnpm i
```

Choose a project name and change 'myWork' to it
- In file 'package.json' there is two 'ROJECT_NAME=myWork'
- File name for 'src/myWork.ts'
- In file 'src/global.d.ts' the var name 'declare const myWork: IMyWork'
- In file 'awful-config.json'

And I advise you to create a symlink between the dist folder & a folder for the project in awful/routines

To keep your nodejs dependencies automaticly update use:
[renovabot](https://github.com/apps/renovate)


## Usage

Dev with hot reload
```bash
pnpm dev
```

Production build
```bash
pnpm build
```

Clean build folder
```bash
pnpm clean
```


## Documentation

[TypescriptToLua](https://typescripttolua.github.io/) \
[Awful](https://www.awful.wtf/docs)


Don't:
- Use default export (will break auto awful env handler)
- Use import as (will break auto awful env handler)


## Deployment

To deploy your project on awful you need to create a new repository which will hold your project transpiled code.

Then change in '.github/workflows/CD.yml'
 - 'YOUR_GITHUB_USERNAME'
 - 'TARGET_REPOSITORY_NAME'
 - 'YOUR_MAIL'

 And create a github secret for the repository with the name 'API_TOKEN_GITHUB'


## Support

For support, pm AQ#2026 on discord or https://discord.gg/MsmcD8vpMZ
