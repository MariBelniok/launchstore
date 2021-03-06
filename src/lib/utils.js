module.exports = {
    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`
        const day = `0${date.getDate()}`
        const hour = date.getHours()
        const minutes = date.getMinutes()

            return{
                day,
                month,
                year,
                hour,
                minutes,
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