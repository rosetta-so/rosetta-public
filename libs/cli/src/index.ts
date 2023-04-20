#!/usr/bin/env node

import { clear } from "console";
import figlet from "figlet";
import chalk from "chalk";
import { Command } from "commander";
// import packageJson from "../package.json";

clear();
console.log(
  chalk.magentaBright(
    figlet.textSync("Rosetta CLI", { horizontalLayout: "full" })
  )
);

const program = new Command();

program
  .command("download")
  .argument("-l, --locale", "locale to download")
  .argument("-a, --all", "download all locales");

program.option("--project").option("--client-id").option("--client-secret");
program.parse();
