import { useReducer } from "react";
import Section from "./Section";

function changeState(state, action) {
    if (action.type === "good") {
        return {
            ...state,
            good: state.good + 1,
            total: state.total + 1,
            positivePercentage: Math.min(Math.round((state.good + 1) / (state.total + 1) * 100), 100)
        }
    }
    return {
        ...state,
        [action.type]: state[action.type] + 1,
        total: state.total + 1,
        positivePercentage: Math.min(Math.round(state.good / (state.total + 1) * 100), 100)
    }
}

export default function Reviews() {
    const [state, dispatch] = useReducer(changeState, {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    })

    const addReview = (review_flavour_num) => {
        let review_flavour = ["good", "neutral", "bad"][review_flavour_num];
        dispatch({type: review_flavour});
    }
    
    return(
        <>
            <Section title={"Please leave feedback"}>
                <button onClick={() => addReview(0)}>Good</button>
                <button onClick={() => addReview(1)}>Neutral</button>
                <button onClick={() => addReview(2)}>Bad</button>
            </Section>
            <Section title={"Statistics"}>
                {state.total <= 0 ? "There is no feedback" : (<><p>Good: {state.good}</p>
                <p>Neutral: {state.neutral}</p>
                <p>Bad: {state.bad}</p>
                <p>Total: {state.total}</p>
                <p>Positive feedback: {state.positivePercentage}%</p></>)}
            </Section>
        </>
    );
}