#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import ora from 'ora'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const TEMPLATES_ROOT = path.join(__dirname, '../src')

async function init() {
  console.log(chalk.bold.blue('\nBem-vindo ao VTEX Toolkit CLI!\n'))

  try {
    const { framework } = await inquirer.prompt([
      {
        type: 'list',
        name: 'framework',
        message: 'Qual framework você está utilizando no seu projeto?',
        choices: [
          {
            name: 'Storefront',
            value: 'storefront',
          },
          {
            name: 'FastStore',
            value: 'faststore',
          },
        ],
      },
    ])

    const spinner = ora(`Instalando toolkit para ${framework}...`).start()

    const sourcePath = path.join(TEMPLATES_ROOT, framework)
    const targetPath = process.cwd()

    const rulesTarget = path.join(targetPath, '.cursor/rules')
    const skillsTarget = path.join(targetPath, '.cursor/skills')
    const commandsTarget = path.join(targetPath, 'commands')

    await fs.ensureDir(rulesTarget)
    await fs.ensureDir(skillsTarget)
    await fs.ensureDir(commandsTarget)

    const rulesSource = path.join(sourcePath, 'rules')
    if (await fs.pathExists(rulesSource)) {
      await fs.copy(rulesSource, rulesTarget, { overwrite: true })
    }

    const skillsSource = path.join(sourcePath, 'skills')
    if (await fs.pathExists(skillsSource)) {
      await fs.copy(skillsSource, skillsTarget, { overwrite: true })
    }

    const commandsSource = path.join(sourcePath, 'commands')
    if (await fs.pathExists(commandsSource)) {
      await fs.copy(commandsSource, commandsTarget, { overwrite: true })
    }

    spinner.succeed(
      chalk.green(`Toolkit instalado com sucesso para ${framework}!`),
    )

    console.log(chalk.bold('\nPróximos passos:'))
    console.log(`1. Reinicie o seu ${chalk.cyan('IDE')}.`)
    console.log(
      `2. Tente usar um comando no chat, ex: ${chalk.yellow('@new-' + (framework === 'storefront' ? 'storefront-block' : 'faststore-components'))}`,
    )
    console.log(
      `3. Confira as regras e habilidades em ${chalk.dim('.cursor/')}\n`,
    )
  } catch (error) {
    console.error(chalk.red('\nErro durante a instalação:'), error.message)
    process.exit(1)
  }
}

init()
