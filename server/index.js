router.all(/\.js$/, async function(request, response, next) {
    if (!config.dev) {
      const jsFilePath = request.url.split('?')[0]
      if (jsFilePath.startsWith(nuxt.options.build.publicPath)) {
        const srcBuiltPath = path.resolve(nuxt.options.buildDir, 'dist', jsFilePath.substr(nuxt.options.build.publicPath.length))
        const y = await myfs.exists(srcBuiltPath)
        if (!y) {
          // console.log(request.url, request.headers.referer)
          // response.redirect('/')
          response.setHeader('Content-Type', 'application/javascript; charset=UTF-8')
          response.setHeader('Accept-Ranges', 'bytes')
          response.setHeader('Vary', 'Accept-Encoding')
          response.setHeader('Transfer-Encoding', 'chunked')
          response.setHeader('Last-Modified', new Date().toUTCString())
          response.setHeader('Cache-Control', 'no-cache')
          response.send('window.serverRebuildHook && window.serverRebuildHook();')
          return
        }
      }
    }
    next()
  }, nuxt.render)