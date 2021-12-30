# PathfindVisual
A visualizer for path finding algorithms on a grid.
My motivation for this project is to learn about popular algorithms in an interactive manner. 
Implementing  data strcutures such as queues using linked list. 

Issues:
-My intial algo based on Breadth first search:  
  -the algo keeps checking neighbors in the latest layer even after hitting the end node.   
    -causes CSS to be overwritten due to CSS specificity (ID > Class)  
    -perhaps I should check END during initial checking of neighbors instead of creating a list of possible neighbor nodes and then iterating thru.   
    
In the future:  
-add Dijkstra  
-add A*   
-add third dimension(?)   
