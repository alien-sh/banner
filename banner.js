const chalk = require('chalk')

const faceColor = chalk.rgb(121, 193, 169)
const eyeColor = chalk.rgb(147, 224, 190)
const backColor = chalk.rgb(47, 104, 159) // name of this color is "Earth seen from afar"
const textColor = chalk.rgb(237, 143, 17)

const banner = `
${backColor(".     .       .  .   . .   .   . .    +  .")}
${backColor("  .     .  :     .    .. :. .")}${faceColor("___---------___.")}
${backColor("       .  .   .    .  :.:. ")}${faceColor("_\".^ .^ ^.  '.. :\"-_")}${backColor(". .")}
${backColor("    .  :       .  .  .:..")}${faceColor("/:            . .^  :.:\\.")}
${backColor("        .   . :: +. :.:")}${faceColor("/: .   .    .        . . .:\\")}
${backColor(" .  :    .     . _ :::")}${faceColor("/:               .  ^ .  . .:\\")}
${backColor("  .. . .   . - : :.:.")}${faceColor("/.                        .  .:\\")}
${backColor("  .      .     . :..")}${faceColor("|:                    .  .  ^. .:|")}
${backColor("    .       . : : ..")}${faceColor("||        .                . . !:|")}
${backColor("  .     . . . ::. ::")}${faceColor("\\(                           . :)/")}
${backColor(" .   .     : . : .:.")}${faceColor(`|. ${eyeColor("######")}             .${eyeColor("#####")}  ::.|`)}
${backColor("  :.. .  :-  : .:  ::")}${faceColor(`|.${eyeColor("#######")}          ..${eyeColor("#######")} :.|`)}
${backColor(" .  .  .  ..  .  .. :")}${faceColor(`\\ ${eyeColor("########")}         :${eyeColor("########")} :/`)}
${backColor("  .        .+ :: : -.:")}${faceColor(`\\ ${eyeColor("########")}      . ${eyeColor("########")}.:/`)}
${backColor("    .  .+   . . . . :.:")}${faceColor(`\\. ${eyeColor("#######")}      ${eyeColor("#######")}..:/`)}
${backColor("      :: . . . . ::.:..:.")}${faceColor("\\           .   .   ..:/")}
${backColor("   .   .   .  .. :  -::::.")}${faceColor("\\.       | |     . .:/")}
${backColor("      .  :  .  .  .-:.\":.::.")}${faceColor("\\             ..:/")}
${backColor(" .      -.   . . . .: .:::.:.")}${faceColor("\\.           .:/")}        ${textColor(" _____  .__  .__                          .__")}
${backColor(".   .   .  :      : ....::_:..:")}${faceColor("\\   ___.  :/")}          ${textColor("/  _  \\ |  | |__| ____   ____        _____|  |__")}
${backColor("   .   .  .   .:. .. .  .: :.:.:")}${faceColor("\\       :/")}          ${textColor("/  /_\\  \\|  | |  |/ __ \\ /    \\      /  ___/  |  \\")}
${backColor("     +   .   .   : . ::. :.:. .:.")}${faceColor("|\\  .:/|")}          ${textColor("/    |    \\  |_|  \\  ___/|   |  \\     \\___ \\|   Y  \\")}
${backColor("     .         +   .  .  ...:: ..")}${faceColor("|  --.:|")}          ${textColor("\\____|__  /____/__|\\___  >___|  / /\\ /____  >___|  /")}
${backColor(".      . . .   .  .  . ... :..:..")}${faceColor("\"(  ..)\"")}        ${textColor("          \\/             \\/     \\/  \\/      \\/     \\/")}
${backColor(" .   .       .      :  .   .: ::")}${faceColor("/  .  .::\\")}

`

console.log(banner)

module.exports = core => {

}