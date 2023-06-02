const debounce = (callback: Function, delayMs: number) => {
    let isDelay = false;

    return () => {
        if (!isDelay) {
            callback();
            isDelay = true;
            setTimeout(() => {
                isDelay = false;
            }, delayMs)
        }
    }
}

export default debounce;