#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log("Wellcome to craftcode-Noman - Zakat Calculator");


let zakat: number = 2.5;
let goldValueinTola = 234800;
let goldWeightinTolaReq = 7.5;

const answer = await inquirer.prompt([
    {
        name: "goldWeight",
        message: chalk.yellow("\t Enter gold Weight"),
        type: "number",
    }
]);
let goldWeight = answer.goldWeight;
if (goldWeight >= goldWeightinTolaReq) {
    let calculatedzakat = (goldWeight * goldValueinTola) * (zakat/100);
    console.log(chalk.blue(`\t The Calculated value of gold weighing ${goldWeight} tola is ${calculatedzakat}`));
} else {
    console.log(chalk.red(" \t zakat not applicable"));
}



