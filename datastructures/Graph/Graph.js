/*
 * @Author: your name
 * @Date: 2020-09-23 23:37:34
 * @LastEditTime: 2020-09-28 22:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS/Graph/Graph.js
 */
let {Dictionary} = require('../dictionary')
let Queue = require('../Queue/queue')
let {Stack} = require('../Stack/stack')

function Graph(){
    let vertices = [] // 存储所有顶点的名称
    let adjList = new Dictionary() // 用字典来存储邻接表

    // 初始化所有节点
    let initNode = () => {
        let color = []
        vertices.forEach( item => color[item] = 'white')
        return color
    }

    let visited = (u, color ,cb) => {
        if(cb){
           cb(u)
        }
        color[u] = 'grey'
        let nei = adjList.get(u)
        for(let i = 0; i < nei.length; i++){
            if(color[nei[i]] === 'white'){
                visited(nei[i], color, cb)
            }
        }
        color[u] = 'black'
    }

    let time = 0
    let DFSVisited = (u, color ,d,f,p) => {
        console.log('discovered ' + u); 
        color[u] = 'grey'
        d[u] = ++time
        let nei = adjList.get(u)
        for(let i = 0; i < nei.length; i++){
            if(color[nei[i]] === 'white'){
                p[nei[i]] = u
                DFSVisited(nei[i], color, d,f,p)
            }
        }
        color[u] = 'black'
        f[u] = ++time
        console.log('explored ' + u); 
    }

    // 添加顶点
    this.addVertex = (v) => {
        vertices.push(v)
        adjList.set(v,[])
    }

    // 添加边
    this.addEdge = (v, w) => {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

   // 广度优先算法
   this.bfs = (v,cb) => {
        let color = initNode()
        let queue = new Queue()
        queue.enqueue(v)

        while(!queue.isEmpty()){
            let u = queue.dequeue()
            let nei = adjList.get(u)
            color[u] = 'grey'
            
            nei.forEach( item => {
                if(color[item]==='white'){
                    queue.enqueue(item)
                    color[item] = 'grey'
                }
            })

            color[u] = 'black'
            if(cb){
                cb(u)
            }
        }
   }

   // 广度优先改进版
   this.BFS = (v) => {
    let color = initNode()
    let queue = new Queue()
    let d = [], // 距离
        pred = [] // 前溯点
    queue.enqueue(v)

    for(let i = 0; i< vertices.length; i++){
        d[vertices[i]] = 0
        pred[vertices[i]] = null
    }

    while(!queue.isEmpty()){
        let u = queue.dequeue() //起点
        let nei = adjList.get(u) // 邻接列表
        color[u] = 'grey'
        
        nei.forEach( item => {
            if(color[item]==='white'){
                queue.enqueue(item)
                color[item] = 'grey'
            
                d[item] = d[u] + 1
                pred[item] = u
            }
        })

        color[u] = 'black'
    }
    return { 
        distances: d,
        predecessors: pred
    }; 
   }

   // 深度优先算法
   this.dfs = (cb) => {
     let color = initNode()
     for(let i = 0; i < vertices.length; i++){
         if(color[vertices[i]] === 'white'){
             visited(vertices[i],color,cb)
         }
     }
   }

   // 深度优先算法改进版
   this.DFS = () => {
    let color = initNode(),
        d = [], // 顶点u的发现时间d[u]
        f = [], // u的完成探索时间f[u]
        p = []; // 当它是由引自顶点u的边而被发现的， 记录顶点u的前溯点p[u] 
        time = 0;

    vertices && vertices.forEach( i => {
        d[i] = 0
        f[i] = 0
        p[i] = null
    })

    for(let i = 0; i < vertices.length; i++){
        if(color[vertices[i]] === 'white'){
            DFSVisited(vertices[i],color,d,f,p)
        }
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p 
    }

  }
 
  // 最短路径算法
  this.dijkstra = (src) => {
      let dist = [], visited = []
      
  }
    this.toString = function(){
        let s = ''
        for(let i = 0; i<vertices.length; i++){
            s += vertices[i] + '-->'
            let val = adjList.get(vertices[i])
            for(let i = 0; i<val.length; i++){
                s += val[i] + ' '
            }
            s += '\n'
        }
        return s
    }; 
}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; 
for (var i=0; i<myVertices.length; i++){ 
 graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I'); 
console.log('=========邻接表=========')
console.log(graph.toString());

function printNode(value){
 console.log('Visited vertex: ' + value); 
}
console.log('=========广度优先=========')
graph.bfs(myVertices[0], printNode)

var shortestPathA = graph.BFS(myVertices[0]);
console.log('=========广度优先改进版=========')
console.log(shortestPathA); 

// 输出所有路径
console.log('=========所有路径=========')
let from = myVertices[0]
for(let i = 1; i< myVertices.length; i++){
    let to = myVertices[i]
    let path = new Stack()
    let s = ''
    for(let v = to; v !== from; v = shortestPathA.predecessors[v]){
        path.push(v)
    }
    path.push(from)
    s = path.pop()
    while(!path.isEmpty()){
        s += '-' + path.pop()
    }
   console.log(s)
    
}

console.log('=========深度优先=========')
graph.dfs(printNode)

console.log('=========深度优先改进版=========')
let a = graph.DFS()
console.log(a)

var graph = [[0, 2, 4, 0, 0, 0],
 [0, 0, 1, 4, 2, 0],
 [0, 0, 0, 0, 3, 0],
 [0, 0, 0, 0, 0, 2],
 [0, 0, 0, 3, 0, 2],
 [0, 0, 0, 0, 0, 0]]; 

