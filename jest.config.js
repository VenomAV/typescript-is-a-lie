module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/src/"],
    transform: {
        "^.+\\.(t|j)sx?$": "esbuild-jest",
    },
}
