#!/usr/bin/env node

const path = require("path")
const relit = require("../index")
const commist = require("commist")()
const argv = require("yargs-parser")(process.argv)
const help = require("help-me")({ dir: path.join(path.dirname(require.main.filename), "..", "help") })

commist.register("help", help.toStdout)
commist.register("version", () => console.log(require("../package.json").version))
commist.register("create", relit.cli)

if (argv.help) {
  help.toStdout()
} else {
  if (argv._.length === 2) {
    relit.cli(process.argv.splice(2))
  } else commist.parse(process.argv.slice(2))
}
