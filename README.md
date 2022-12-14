# Awfully-Typed

Template to create typescript rotations for [Awful](https://awful.wtf)

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

To keep your nodejs dependencies automatically updated, use:
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

## Deployment

To deploy your project on awful you need to create a new repository which will hold your project transpiled code.

Then change in '.github/workflows/CD.yml'

- 'aqwerty420' to your github username
- 'Awfully-Typed-Build' to your target repository
- 'aqwerty420@protonmail.com' to your email

And create a [github secret](https://github.com/settings/tokens) for the repository and store it with the name 'API_TOKEN_GITHUB'

## Support

For support, pm AQ#2026 on discord or https://discord.gg/MsmcD8vpMZ
