export const gamesHandle = (value) => {
    return (dispatch) => {
        dispatch({
            type: "gameName",
            payload: value
        });
    }
}

export const gamesYearOfLaunch = (value) => {
    return (dispatch) => {
        dispatch({
            type: "yearOfLaunch",
            payload: value
        });
    }
}