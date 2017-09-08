import { HISTORY_SET } from "../constants/History";

const initialState = {
    data: ''
};

const History = (state = initialState, { type, payload }) => {
    switch (type) {
        case HISTORY_SET:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
};

export default History;
