import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.join(__dirname, '..')
const CURSOR_DIR = path.join(ROOT, '.cursor')
const SRC_DIR = path.join(ROOT, 'src')

async function sync() {
  console.log('Syncing templates from .cursor to src...')

  try {
    // Storefront Rules
    await fs.copy(path.join(CURSOR_DIR, 'rules/storefront'), path.join(SRC_DIR, 'storefront/rules'), { overwrite: true })
    await fs.copy(path.join(CURSOR_DIR, 'rules/global.mdc'), path.join(SRC_DIR, 'storefront/rules/global.mdc'), { overwrite: true })

    // FastStore Rules
    await fs.copy(path.join(CURSOR_DIR, 'rules/faststore'), path.join(SRC_DIR, 'faststore/rules'), { overwrite: true })
    await fs.copy(path.join(CURSOR_DIR, 'rules/global.mdc'), path.join(SRC_DIR, 'faststore/rules/global.mdc'), { overwrite: true })

    // Skills
    await fs.copy(path.join(CURSOR_DIR, 'skills/vtex-api-consultant'), path.join(SRC_DIR, 'storefront/skills/vtex-api-consultant'), { overwrite: true })
    await fs.copy(path.join(CURSOR_DIR, 'skills/faststore-consultant'), path.join(SRC_DIR, 'faststore/skills/faststore-consultant'), { overwrite: true })

    // Commands
    const storefrontCommands = ['new-block.md', 'new-component.md', 'new-service.md']
    for (const cmd of storefrontCommands) {
      await fs.copy(path.join(CURSOR_DIR, 'commands', cmd), path.join(SRC_DIR, 'storefront/commands', cmd), { overwrite: true })
    }

    const faststoreCommands = ['new-faststore-cms.md', 'new-faststore-components.md', 'new-faststore-resolvers.md']
    for (const cmd of faststoreCommands) {
      await fs.copy(path.join(CURSOR_DIR, 'commands', cmd), path.join(SRC_DIR, 'faststore/commands', cmd), { overwrite: true })
    }

    console.log('Templates synced successfully!')
  } catch (error) {
    console.error('Error syncing templates:', error)
    process.exit(1)
  }
}

sync()
