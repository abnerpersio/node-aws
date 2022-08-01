require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node16',
    format: 'cjs',
    external: ['./node_modules/*'],
    outdir: 'dist',
    logLevel: 'info',
  })
  .catch(() => process.exit(1));
