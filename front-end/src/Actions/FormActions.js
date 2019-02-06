import {
    FORM_SUBMIT,
    LOADING_TRUE,
    PAGE_1,
    PLANS_DATA,
    CODES_DATA,
    FORM_DONE,
    FORM_ERROR
} from './AllActions';
import axios from 'axios'

export const restartSimulation = () => (dispatch) => {
    return dispatch({
        type: PAGE_1
    })
}

export const getPlans = () => async (dispatch) => {
    try {
        const plans = await axios('/telzir-api/details/get-plans')
        dispatch({
            type: PLANS_DATA,
            payload: plans.data
        })
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getCodes = () => async (dispatch) => {
    try {
        const codes = await axios('/telzir-api/details/get-codes')
        dispatch({
            type: CODES_DATA,
            payload: codes.data
        })
    } catch (error) {
        console.log(error)
        return []
    }
}

export const submitForm = (form) => async (dispatch) => {
    try {
        console.log(form)
        dispatch({
            type: FORM_SUBMIT,
            payload: form
        })
        dispatch({
            type: LOADING_TRUE
        })
        const codes = await axios(
            `/telzir-api/details/get-taxes-details/${form.plano}/${form.origem}/${form.destino}/${form.valor}/`)
        dispatch({
            type: FORM_DONE,
            payload: codes.data
        })
    } catch (error) {
        dispatch({
            type: FORM_ERROR,
            payload: error
        })
        return []
    }
}