export const incCounter = (data) => {
    return {
        type: 'INC',
        payload: data,
    };
};