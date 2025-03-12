function solution(name, yearning, photo) {
    const scoreMap = {};

    // 각 이름과 그리움 점수를 매핑
    name.forEach((person, idx) => {
        scoreMap[person] = yearning[idx];
    });

    // 각 사진의 추억 점수를 계산
    return photo.map(p => 
        p.reduce((total, person) => total + (scoreMap[person] || 0), 0)
    );
}