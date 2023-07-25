imoveis = []
imovel = ''

do {
    
    opcao = prompt("Quantidade de imoveis cadastrados: " + (imoveis.length) + "\n \n Escolha uma opção: \n 1 - Cadastrar novo imóvel \n 2 - Mostrar todos os imóveis cadastrados \n 3 - Encerrar programa")

    switch(opcao){
        case "1": 
         caracImovel = {}
         caracImovel.proprietario = prompt("Digite o nome do proprietario")
         caracImovel.quartos =  prompt("Digite a quantidade de quartos")
         caracImovel.banheiros =  prompt("Digite a quantidade de banheiros")
         caracImovel.garagem =  prompt("Possui garagem?")
         imoveis.push(caracImovel)
         break
        case "2":
            for( let i=0;i<imoveis.length;i++){
              alert( 
                "Imóvel " + (i+1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuantidade de quartos: " + imoveis[i].quartos +
                "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                "\nPossui garagem: " + imoveis[i].garagem
              )
            }
         break    
        case "3":
         alert("Encerrando programa")
         break 
        default:
         alert("Escolha uma opção válida!")    


    }
    
} while (opcao !== "3");