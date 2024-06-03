const draw = (x) => {
    let ans = '';

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i < j) {
                ans += "-";
            } else {
                ans += "*";
            }
        }
        ans += "\n";
    }

    let num = x;
    for (let i = 0; i < x - 1; i++) {
        for (let j = 0; j < x; j++) {
            if (num - 1 > j) {
                ans += "*";
            } else {
                ans += "-";
            }
        }
        ans += "\n";
        num--;
    }

    document.getElementById('output').textContent = ans;
};