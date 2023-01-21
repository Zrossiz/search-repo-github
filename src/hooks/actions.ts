import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { gitHubActions } from "../store/github/github.slice"

const actions = {
    ...gitHubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}