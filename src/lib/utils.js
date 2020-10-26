module.exports = {
    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`
        const day = `0${date.getUTCDate()}`

            return{
                day,
                month,
                year,
                birthday: `${day.slice(-2)}/${month.slice(-2)}`,
                iso: `${year}-${month.slice(-2)}-${day.slice(-2)}`,
                format: `${day.slice(-2)}/${month.slice(-2)}/${year}`
        }
    },
    formatPrice(price){
        return new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    }
}