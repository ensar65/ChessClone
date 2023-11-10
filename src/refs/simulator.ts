import deployer from "./deployer";

let notions = deployer();

console.log(notions)

export default function () {
    let pieces = Array.from(notions,([name,value]) => ({name , value}))

}