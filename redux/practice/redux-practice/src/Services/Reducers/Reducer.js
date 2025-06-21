import { Add_To_Cart } from "../../Constants"

const initialState = {
    cardData : []
}
export const cardItem = (state = initialState , action) => {
    switch (action.type) {
        case  Add_To_Cart:
            return {
                ...state,cardData :action.Data
            }
            default :
            return state
    }

}