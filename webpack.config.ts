import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

import type { Configuration } from 'webpack'
import type { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        images: path.resolve(__dirname, 'public', 'images')
    }


    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const apiUrl = 'https://6427b650161067a83bffb904.mockapi.io/'
    const postApiUrl = 'https://app.aaccent.su/js/confirm.php'

    const isDev = mode === 'development'

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        postApiUrl
    })
    return config
}
