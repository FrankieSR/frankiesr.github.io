define([
    'lib/knockout-store/connect', 'lib/knockout-store/store'
], (connect, {setState, getState}) => {
    return {
        setState,
        getState,
        connect
    };
});
