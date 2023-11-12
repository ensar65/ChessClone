import deployer from "./deployer";

let notions = deployer();


export default function () {
    let pieces = Array.from(notions,([name,value]) => ({name , value}))
    pieces.forEach(data => {
        console.log(data)
    })
}