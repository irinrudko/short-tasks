const initState = {
    themeId: '1',
}

export type themeReducerStateType = typeof initState

export const themeReducer = (state = initState, action: changeThemeType): themeReducerStateType => {
    // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }

        default:
            return state
    }
}

export const changeThemeId = (id: string): changeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeType = {
    type: 'SET_THEME_ID'
    id: string
}
