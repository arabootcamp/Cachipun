 /*Función que retorna quien gana y la selección de la computadora*/
 function Cachipun(userSelection) {
   let computerSelection = Math.floor(Math.random() * ((3 + 1) - 1) + 1);
   let difference = userSelection - computerSelection;
   console.log(`computerSelection= ${computerSelection} difference=${difference}`);
   //Empate, retorna 0
   if (difference == 0)
     return [0, computerSelection]

   //Gana Computadora, retorna -1 
   if (difference == -1 || difference == 2)
     return [-1, computerSelection];

   //Gana Usuario, retorna 1 
   return [1, computerSelection];
 }

 /*Main*/
 let numGames = parseInt(prompt("Ingrese la cantidad de partidas a jugar"));
 let winUser = 0,
   tie = 0,
   userSelection = 0,
   gameResult, computerSelection;
 let map = ["", "Piedra", "Papel", "Tijera"];

 if (!isNaN(numGames) && Number.isInteger(numGames))
   for (let i = 0; i < numGames; i++) {
     let userSelection = parseInt(prompt(`Ingrese: \n1 es Piedra \n2 es Papel \n3 es Tijera`));
     if (!isNaN(userSelection) && Number.isInteger(userSelection) && userSelection > 0 && userSelection < 4) {
       [gameResult, computerSelection] = Cachipun(userSelection);

       switch (gameResult) {

         case -1:
           alert(`\ntu:${map[userSelection]} V/S Computadora:${map[computerSelection]}\n\nPERDISTE contra la Computadora\n\nPartidas: ${i+1} de ${numGames}\nGanados: ${winUser}\nEmpatados: ${tie}\nPerdidos: ${i+1 - winUser - tie}`);
           break;

         case 0:
           tie++;
           alert(`\ntu:${map[userSelection]} V/S Computadora:${map[computerSelection]}\n\nEMPATASTE con la Computadora\n\nPartidas: ${i+1} de ${numGames}\nGanados: ${winUser}\nEmpatados: ${tie}\nPerdidos: ${i+1 - winUser - tie}`);
           break;
           break;

         case 1:
           winUser++;
           alert(`\ntu:${map[userSelection]} V/S Computadora:${map[computerSelection]}\n\nGANASTE a la Computadora, Felicitaciones!!!\n\nPartidas: ${i+1} de ${numGames}\nGanados: ${winUser}\nEmpatados: ${tie}\nPerdidos: ${i+1 - winUser - tie}`);
           break;
         default:
           alert("Esto no deberia ocurrir");
           break;
       }
     } else {
       alert(`Debe ingresar un dígito que sea 1, 2 o 3.`);
       numGames = NaN;
     }
   } else
     alert(`Debe ingresar solo número enteros positivos.`);

 alert(`**RESULTADO FINAL** \n\nPartidas: ${numGames} \nGanaste: ${winUser}\nEmpataste: ${tie}\nPerdiste: ${numGames - winUser - tie}`);