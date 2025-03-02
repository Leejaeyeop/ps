function solution(info, n, m) {
    const len = info.length;
    const INF = 9999;

    let dp = Array.from({ length: len + 1 }, () => Array(m).fill(INF));

    dp[0][0] = 0;

    for (let i = 0; i < len; i++) {
        let aTrace = info[i][0], bTrace = info[i][1];

        for (let j = m - 1; j >= 0; j--) {
            if (dp[i][j] === INF) continue;

            let newA = dp[i][j] + aTrace;
            let newB = j;
            if (newA < n) dp[i + 1][newB] = Math.min(dp[i + 1][newB], newA);

            let newA2 = dp[i][j];
            let newB2 = j + bTrace;
            if (newB2 < m) dp[i + 1][newB2] = Math.min(dp[i + 1][newB2], newA2);
        }
    }

    let result = Math.min(...dp[len]);
    return result === INF ? -1 : result;
}