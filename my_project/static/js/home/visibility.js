document.title = "Привет!";
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Возвращайся!";
    } else {
        document.title = "Привет!";
    }
}
);