import { Template, defaultBuildLogger } from 'e2b'
import { template } from './template'

async function main() {
  await Template.build(template, {
    alias: 'v0-nextjs-build-new',
    onBuildLogs: defaultBuildLogger(),
  });
}

main().catch(console.error);