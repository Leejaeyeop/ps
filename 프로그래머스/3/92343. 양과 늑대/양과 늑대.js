// bfs + 비트마스킹
// 방문 할 노드, 이미 방문한 노드 계산
var graph = {}
var answer = 0;

class Node {
    constructor(num, nextVisit, visited, wolf, lamb) {
        this.num = num
        this.nextVisit = nextVisit
        this.visited = visited
        this.wolf = wolf
        this.lamb = lamb
    }
} 

// 방문 가능 노드 계산
function getNextVisitNodes(curNodeNum,nextVisit,visited) {
    //  자식 노드들  
    let nodeChildren = graph[curNodeNum] ?? []
    
    if(nodeChildren.length> 0) {
        for(let node of nodeChildren) {
            // 아직 방문 하지 않았다.         
            if(!(visited & (1 << node))) {
                nextVisit |= (1 << node)
            } 
         }
    }
    
    return nextVisit
}

function bfs(queue, info) {
    let nQueue = []
    // 방문처리 + 방문 가능 계산 + 최종 계산
    while(queue.length > 0) {
        let node = queue.pop()
        // 현 node 방문 처리
        node.visited |= (1 << node.num)
        
        if(info[node.num] === 0) {
            node.lamb +=1
        } else {
            node.wolf +=1
        }
        
        // 양이 많다 -> 다음으로, 아직 방문하지 않은 노드들 넣기
        if(node.wolf < node.lamb) {
            for(let i=0; i<info.length; i++) {
                // 현 노드의 다음 탐색할 노드들           
                if(node.nextVisit & (1<<i)) {
                    let nextVisit = node.nextVisit & ~(1<<i)
                    nQueue.push(new Node(i,getNextVisitNodes(i,nextVisit,node.visited),node.visited,node.wolf,node.lamb))
                }
            }
            answer = answer > node.lamb ? answer : node.lamb   
        }         
    }
    
    if(nQueue.length > 0){
        bfs(nQueue, info)
    }
}

function solution(info, edges) {
    
    for(let edge of edges) {
        let [par,chi] = edge
        if(!graph[par]) {
            graph[par] = []
        }
        graph[par].push(chi)
    }
    
    let queue = [new Node(0,getNextVisitNodes(0,0,0),0,0,0)]
    bfs(queue, info)
     
    return answer;
}