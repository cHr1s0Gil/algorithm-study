import java.util.Map;
import java.util.HashMap;

class Solution {
    public String[] solution(String[] players, String[] callings) {
        Map<String, Integer> ranking = new HashMap<String, Integer>();
        
        for(int i = 0; i < players.length; i++)
            ranking.put(players[i], i);
    

        for(String name: callings) {
            int rank = ranking.get(name);
            String prevPlayer = players[rank - 1];
            
            players[rank - 1] = name;
            players[rank] = prevPlayer;
            
            ranking.put(name, rank - 1);
            ranking.put(prevPlayer, rank);
        }
        
        return players;
    }
}
