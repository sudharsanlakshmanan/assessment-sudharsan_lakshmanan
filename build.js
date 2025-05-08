import { build } from '@maizzle/framework'
import config from './config.production.cjs'

build('production', config)
  .then(() => console.log('✅ Build complete!'))
  .catch(console.error)
