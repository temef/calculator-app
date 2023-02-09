export const calculator = (cartValue: number, distance: number, items: number, date: Date) => {

    let deliveryPrice = 0

    // If the cart value is less than 10€, a small order surcharge is added to the delivery price.
    // The surcharge is the difference between the cart value and 10€. 
    if(cartValue < 10) deliveryPrice += (10 - cartValue)

    // The delivery is free (0€) when the cart value is equal or more than 100€.
    else if(cartValue >= 100) {
        return -1
    }
    // A delivery fee for the first 1000 meters (=1km) is 2€
    if(distance <= 1000) deliveryPrice += 2
    // 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination
    else {
        deliveryPrice += Math.ceil(distance/500)
    }
    
    // If the number of items is five or more,
    // an additional 50 cent surcharge is added for each item above and including the fifth item.
    if(items >= 5) deliveryPrice += items * 0.5

    // An extra "bulk" fee applies for more than 12 items of 1,20€
    else if(items > 12) deliveryPrice += 4.5 + (items - 12) * 1.20

    // During the Friday rush (3 - 7 PM UTC),
    // the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x.
    if(date.getUTCDay() == 5 && date.getUTCHours() >= 15 && date.getUTCHours() <= 19) {
        // console.log(date.getUTCHours(), "tunnit")
        deliveryPrice = deliveryPrice * 1.2
    }
    if(deliveryPrice >= 15) return 15

    return parseFloat(deliveryPrice.toFixed(2))
}

export default calculator