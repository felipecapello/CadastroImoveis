imoveis = []
caracImovel = {}
do {
    let quantidadeImoveis = imoveis.lenght
    opcao = prompt("Quantidade de imoveis cadastrados: " + (quantidadeImoveis) + "\n \n Escolha uma opção: \n 1 - Cadastrar novo imóvel \n 2 - Mostrar todos os imóveis cadastrados \n 3 - Encerrar programa")
    

    switch(opcao){
        case "1": 
         caracImovel.proprietario = prompt("Digite o nome do proprietario")
         caracImovel.quartos =  prompt("Digite a quantidade de quartos")
         caracImovel.banheiros =  prompt("Digite a quantidade de banheiros")
         caracImovel.garagem =  prompt("Possui garagem?")
         imoveis += [caracImovel.proprietario + "  " + caracImovel.quartos + " " + caracImovel.banheiros + " " + caracImovel.garagem + "\n"]
         break
        case "2":
         alert("Aqui estão todos os imóveis! \n" + imoveis)
         break
        case "3":
         alert("Encerrando programa")
         break 
        default:
         alert("Escolha uma opção válida!")    


    }
    
} while (opcao !== "3");