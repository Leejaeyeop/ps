function solution(babbling) {
    const possibleSounds = ["aya", "ye", "woo", "ma"];
    let pronounceableCount = 0;

    for (const word of babbling) {
        let remainingWord = word;
        let lastUsedSound = ""; // 직전에 사용된 발음을 저장
        let canPronounce = true; // 현재 단어를 발음할 수 있는지 여부

        while (remainingWord.length > 0) {
            let foundSoundThisTurn = false; // 이번 차례에 발음 가능한 부분을 찾았는지 여부

            for (const sound of possibleSounds) {
                if (remainingWord.startsWith(sound)) {
                    if (sound === lastUsedSound) {
                        // 연속해서 같은 발음을 하는 경우
                        canPronounce = false;
                        break; // inner loop (possibleSounds) 탈출
                    }
                    // 발음 가능한 부분을 찾았고, 연속되지 않음
                    remainingWord = remainingWord.substring(sound.length);
                    lastUsedSound = sound;
                    foundSoundThisTurn = true;
                    break; // inner loop (possibleSounds) 탈출, 다음 부분으로 넘어감
                }
            }

            if (!canPronounce) {
                // 연속 발음으로 인해 발음 불가 판정 시
                break; // while loop 탈출
            }

            if (!foundSoundThisTurn) {
                // 현재 남은 문자열의 시작 부분이 어떤 발음과도 일치하지 않는 경우
                canPronounce = false;
                break; // while loop 탈출
            }
        }

        // 모든 과정을 통과했고, 남은 문자열이 없다면 발음 가능한 단어
        if (canPronounce && remainingWord.length === 0) {
            pronounceableCount++;
        }
    }

    return pronounceableCount;
}