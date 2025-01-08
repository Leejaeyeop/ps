import java.util.HashMap;
import java.util.ArrayList;

class Solution {
    public int[] solution(String[] info, String[] query) {
        String[] langs = {"cpp", "java", "python"},
                 deps = {"backend", "frontend"},
                 exps = {"junior", "senior"},
                 foods = {"chicken", "pizza"};

        HashMap<String, HashMap<String, HashMap<String, HashMap<String, ArrayList<Integer>>>>> langMap = new HashMap();
        for (String lang : langs)
            langMap.put(lang, new HashMap<>());
        for (String lang : langMap.keySet()) {
            HashMap<String, HashMap<String, HashMap<String, ArrayList<Integer>>>> depMap = langMap.get(lang);
            for (String dep : deps)
                depMap.put(dep, new HashMap<>());
            for (String dep : depMap.keySet()) {
                HashMap<String, HashMap<String, ArrayList<Integer>>> expMap = depMap.get(dep);
                for (String exp : exps)
                    expMap.put(exp, new HashMap<>());
                for (String exp : expMap.keySet()) {
                    HashMap<String, ArrayList<Integer>> foodMap = expMap.get(exp);
                    for (String food : foods)
                        foodMap.put(food, new ArrayList<Integer>());
                }
            }
        }

        for (String row : info) {
            String[] parse = row.split(" ");
            langMap.get(parse[0]).get(parse[1]).get(parse[2]).get(parse[3]).add(Integer.parseInt(parse[4]));
        }

        for (HashMap<String, HashMap<String, HashMap<String, ArrayList<Integer>>>> depMap : langMap.values())
            for (HashMap<String, HashMap<String, ArrayList<Integer>>> expMap : depMap.values())
                for (HashMap<String, ArrayList<Integer>> foodMap : expMap.values())
                    for (ArrayList<Integer> scoreList : foodMap.values())
                        scoreList.sort(null);

        int[] answer = new int[query.length];
        int i = 0;
        for (String quest : query) {
            String[] parse = quest.split(" and "),
                     subParse = parse[3].split(" ");
            parse[3] = subParse[0];
            int minScore = Integer.parseInt(subParse[1]);

            for (String lang : langs)
                if (parse[0].equals("-") || parse[0].equals(lang)) {
                    HashMap<String, HashMap<String, HashMap<String, ArrayList<Integer>>>> depMap = langMap.get(lang);
                    for (String dep : deps)
                        if (parse[1].equals("-") || parse[1].equals(dep)) {
                            HashMap<String, HashMap<String, ArrayList<Integer>>> expMap = depMap.get(dep);
                            for (String exp : exps)
                                if (parse[2].equals("-") || parse[2].equals(exp)) {
                                    HashMap<String, ArrayList<Integer>> foodMap = expMap.get(exp);
                                    for (String food : foods)
                                        if (parse[3].equals("-") || parse[3].equals(food)) {
                                            ArrayList<Integer> scoreList = foodMap.get(food);
                                            int n = scoreList.size(),
                                                min = 0,
                                                max = n-1,
                                                mid = max,
                                                idx = n;
                                            while (min <= max) {
                                                mid = (min + max) / 2;
                                                if (scoreList.get(mid) >= minScore) {
                                                    idx = mid;
                                                    max = mid - 1;
                                                } else
                                                    min = mid + 1;
                                            }
                                            answer[i] += n - idx;
                                        }
                                }
                        }
                }
            i++;
        }
        return answer;
    }
}