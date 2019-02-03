import {
    FORM_SUBMIT,
    LOADING_TRUE,
    PAGE_1,
    PLANS_DATA,
    CODES_DATA,
    FORM_DONE
} from './AllActions';
import axios from 'axios'

export const restartSimulation = () => (dispatch) => {
    return dispatch({
        type: PAGE_1
    })
}

export const getPlans = () => async (dispatch) => {
    try {
        const plans = await axios('http://localhost:5000/plans')
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
        const codes = await axios('http://localhost:5000/codes')
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
        const codes = await axios.post('http://localhost:5000/calculate-rate', form)
        dispatch({
            type: FORM_DONE,
            payload: codes.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: PAGE_1
        })
        return []
    }
}