import { Add_To_Cart } from "../../Constants"
export const addTOCart = (itemData) => {
    return {
        type:"Add_To_Cart",
        data: itemData

    }
}