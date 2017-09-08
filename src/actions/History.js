import { HISTORY_SET } from "../constants/History";

export const setHistory = data => ({
    type: HISTORY_SET,
    payload: {
        data
    }
});
