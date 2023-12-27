export function requestUserActive() {
    axios.post('/admin/user/active');
}

export function pollingUserActive(seconds) {
    return setInterval(() => {
        requestUserActive();
    }, seconds * 1000);
}
