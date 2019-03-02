import {
    FORM_SUBMIT,
    LOADING_TRUE,
    PLANS_DATA,
    CODES_DATA,
    FORM_DONE,
    FORM_ERROR,
    FORM_RESET
} from './AllActions';
import axios from 'axios'

export const restartSimulation = () => (dispatch) => {
    return dispatch({
        type: FORM_RESET
    })
}

export const getPlans = () => async (dispatch) => {
    try {
        const plans = await axios('/tarifa-api/details/get-plans')
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
        const codes = await axios('/tarifa-api/details/get-codes')
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
        dispatch({
            type: FORM_SUBMIT,
            payload: form
        })
        dispatch({
            type: LOADING_TRUE
        })
        const codes = await axios(
            `/tarifa-api/details/get-taxes-details/${form.plano}/${form.origem}/${form.destino}/${form.valor}/`)
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