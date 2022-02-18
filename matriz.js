let numero = parseInt(prompt("Ingrese el tamaño de la matriz"));
let inicio = 0;
let final = numero - 1;
let cont = parseInt(prompt("Ingrese el numero de inicio"));

let matriz = [numero];

for (i = 0; i < numero; i++) {
  matriz[i] = [numero];
}

for (i = 0; i < numero; i++) {
  for (j = 0; j < numero; j++) {
    matriz[i][j] = 0;
    
  }
}

for (let x = 0; x < matriz.length; x++) {
  for (i = inicio; i <= final; i++) {
    matriz[inicio][i] = cont;
    cont++;
    // console.log(matriz)
  }

  for (i = inicio + 1; i <= final; i++) {
    matriz[i][final] = cont;
    cont++;
  }

  for (i = final - 1; i >= inicio; i--) {
    matriz[final][i] = cont;
    cont++;
  }

  for (i = final - 1; i >= inicio + 1; i--) {
    matriz[i][inicio] = cont;
    cont++;
  }

  inicio = inicio + 1;
  final = final - 1;
}



console.log(matriz);
