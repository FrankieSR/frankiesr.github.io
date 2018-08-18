define(['knockout'], (ko) => {
    const stateObservable = ko.observable();

    function setState(state) {
        stateObservable(state);
    }

    function getState() {
        return stateObservable;
    }

    return {
        setState,
        getState
    };
});
