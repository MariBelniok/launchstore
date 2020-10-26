const Mask = {
    apply(input, func){
        setTimeout(() => {
            input.value = Mask[func](input.value)
        }, 1)
    }, 
    formatBRL(value){
        value = value.replace(/\D/g,"")

        return value = Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(value/100)
    }
}