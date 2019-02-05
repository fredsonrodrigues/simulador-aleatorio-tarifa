import { 
    FORM_SUBMIT, 
    FORM_RESET, 
    LOADING_TRUE,
    PAGE_1, 
    PAGE_2, 
    PLANS_DATA,
    CODES_DATA,
    FORM_DONE
} from '../Actions/AllActions';

const INITIALSTATE = {
    form: {
        plano: "",
        origem: "",
        destino: "",
        valor: ""
    },
    simulation: [],
    loading: false,
    page: 2,
    codes: [],
    plans: []
};
export default function FormReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case FORM_SUBMIT:
            console.log('FORM_SUBMIT Action')
            return { ...state, form: action.payload };
        case FORM_RESET:
            console.log('FORM_RESET Action')
            return { ...state, form: action.payload };
        case FORM_DONE:
            console.log('FORM_DONE Action')
            return { ...state, simulation: action.payload, page: 2 };            
        case LOADING_TRUE:
            console.log('LOADING_TRUE Action')
            return { ...state, page: 0 };
        case PAGE_1:
            console.log('PAGE_1 Action')
            return { ...state, page: 1 };
        case PAGE_2:
            console.log('PAGE_2 Action')
            return { ...state, page: 2 };
        case PLANS_DATA:
            console.log('PLANS_DATA Action')
            return { ...state, plans: action.payload };
        case CODES_DATA:
            console.log('CODES_DATA Action')
            return { ...state, codes: action.payload };                       
        default:
            return state;
    }
}