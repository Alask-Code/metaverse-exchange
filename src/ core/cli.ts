import { createInterface } from "readline";

function menu() {
  const splash = [
    "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
    "┃ Metaverse Exchange - 0.0.1     ┃",
    "┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ┃",
    "┃ [1] Status                     ┃",
    "┃ [2] Controle                   ┃",
    "┃ [3] Modo Headless              ┃",
    "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
  ];
  console.log(splash.join("\n"));
}

export default function cli() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  menu();
  readline.question("┃ $> ", (command) => {
    console.log("┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
    console.log(`┃ Opção: ${command} ━━━━━━━━━━━━━━━━━━━━━━┛`);
    readline.close();
  });
}
