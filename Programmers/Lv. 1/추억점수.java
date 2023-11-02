import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

class Solution {
    public int[] solution(String[] names, int[] yearnings, String[][] photos) {
        int[] answer = new int[photos.length];
        Map<String, Integer> yearnMap = new HashMap<String, Integer>();
        
        for(int i = 0; i < names.length; i++)
            yearnMap.put(names[i], yearnings[i]);
        
        for(int i = 0; i < photos.length; i++) {
            int yearnSum = 0;
            for(String name: photos[i]) {
                if(yearnMap.containsKey(name))
                    yearnSum += yearnMap.get(name);
            }
            
            answer[i] = yearnSum;
        }
        
        return answer;
    }
}
