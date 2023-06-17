let tam = [3,2,5,1,7,6]

var InsertionSort =  function(array){
    
    for(i = 1; i < tam.length; i++){
        let escolhido = tam[i]
        let j = i-1
        
        while(j >= 0 && tam[j] > escolhido){
            tam[j+1] = tam[j]
            j = j-1
        }
        tam[j+1] = escolhido
    }
    console.log(tam)
}
InsertionSort(tam)