export const sortMovie = (data) => {
    let temp = []
   
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
            if(data[i].title < data[j].title){
                temp = data[j]
                data[j] = data[i]
                data[i] = temp
            }
        }
    }

    return data
}