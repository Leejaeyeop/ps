function solution(nodes, edges) {
    const answer = [0, 0];
    const graph = {};
    const visited = Array(1000001).fill(false);

    // 그래프 초기화
    for (const node of nodes) {
        graph[node] = [];
    }
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function bfs(start) {
        const queue = [start];
        visited[start] = true;

        let isHoljjak = true;
        let holjjakRootChance = 1;

        let isReverseHoljjak = true;
        let reverseHoljjakRootChance = 1;

        while (queue.length > 0) {
            const node = queue.shift();
            const childrenCntIfRoot = graph[node].length;
            const childrenCntIfNotRoot = graph[node].length - 1;

            if ((node + childrenCntIfNotRoot) % 2 === 1) { // 노드와 자식 수의 합이 홀수면 홀짝 노드가 아님
                if (holjjakRootChance > 0) {
                    holjjakRootChance -= 1;
                    if ((node + childrenCntIfRoot) % 2 === 1) {
                        isHoljjak = false;
                    }
                } else {
                    isHoljjak = false;
                }
            }

            if ((node + childrenCntIfNotRoot) % 2 === 0) { // 노드와 자식 수의 합이 짝수면 역홀짝 노드가 아님
                if (reverseHoljjakRootChance > 0) {
                    reverseHoljjakRootChance -= 1;
                    if ((node + childrenCntIfRoot) % 2 === 0) {
                        isReverseHoljjak = false;
                    }
                } else {
                    isReverseHoljjak = false;
                }
            }

            for (const nextNode of graph[node]) {
                if (!visited[nextNode]) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            }
        }

        if (isHoljjak && holjjakRootChance > 0) {
            isHoljjak = false; // 루트가 없다면 홀짝이 아님
        }
        if (isReverseHoljjak && reverseHoljjakRootChance > 0) {
            isReverseHoljjak = false; // 루트가 없다면 역홀짝이 아님
        }

        return [isHoljjak, isReverseHoljjak];
    }

    for (const node of nodes) {
        if (!visited[node]) {
            const [isHoljjak, isReverseHoljjak] = bfs(node);
            if (isHoljjak) {
                answer[0] += 1;
            }
            if (isReverseHoljjak) {
                answer[1] += 1;
            }
        }
    }

    return answer;
}