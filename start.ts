import { deferred } from 'https://deno.land/std@0.175.0/async/deferred.ts'

if (import.meta.main) {
  const def = deferred<void>()
  let int: number | undefined = undefined

  Deno.addSignalListener('SIGTERM', () => {
    console.log('SIGTERM!')
    def.resolve()
    clearInterval(int)
  })

  int = setInterval(() => console.log('.'), 3000)

  try {
    await def
  } finally {
    Deno.exit(0)
  }
}
