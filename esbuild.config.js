// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require("esbuild")

const isDev = process.env.NODE_ENV === "development"

esbuild
    .build({
        entryPoints: ["src/index.ts"],
        platform: "node",
        outdir: ".build",
        minify: !isDev,
        watch: false,
        sourcemap: true,
        keepNames: true,
        treeShaking: true,
        bundle: true,
        define: {
            "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
            RUN_ENV: `"${process.env.RUN_ENV}"`,
        },
        // logLevel: "silent",
    })
    .catch(() => process.exit(1))
