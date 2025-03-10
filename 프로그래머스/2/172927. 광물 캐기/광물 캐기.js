function solution(picks, minerals) {
    const fatigueTable = {
        diamond: [1, 5, 25],
        iron: [1, 1, 5],
        stone: [1, 1, 1]
    };
    
    const totalPicks = picks.reduce((sum, count) => sum + count, 0);
    const maxGroups = Math.min(totalPicks, Math.ceil(minerals.length / 5));
    const groups = [];
    
    for (let i = 0; i < maxGroups * 5; i += 5) {
        const group = minerals.slice(i, i + 5);
        const fatigue = group.reduce((acc, mineral) => {
            acc[0] += fatigueTable[mineral][0]; // 다이아 곡괭이 사용 시 피로도
            acc[1] += fatigueTable[mineral][1]; // 철 곡괭이 사용 시 피로도
            acc[2] += fatigueTable[mineral][2]; // 돌 곡괭이 사용 시 피로도
            return acc;
        }, [0, 0, 0]);
        groups.push(fatigue);
    }
    
    groups.sort((a, b) => b[2] - a[2]); // 돌 곡괭이 사용 시 피로도가 큰 순으로 정렬
    
    let fatigueSum = 0;
    for (const group of groups) {
        let pickIndex = picks.findIndex(count => count > 0);
        if (pickIndex === -1) break;
        
        fatigueSum += group[pickIndex];
        picks[pickIndex]--;
    }
    
    return fatigueSum;
}