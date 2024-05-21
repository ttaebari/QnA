# DFS

# 방문 정보를 리스트 자료형으로 표현
visited =[False] * 9

# 각 노드가 연결된  정보를 리스트 자료형으로 표현 (2차원 리스트)
graph = [
    [],                 # 1번 노드와 연결된 노드들
    [2, 3, 8],          # 2번 노드와 연결된 노드들
    [1, 7],             # 3번 노드와 연결된 노드들
    [1, 4, 5],          # 4번 노드와 연결된 노드들
    [3, 5],             # 5번 노드와 연결된 노드들
    [3, 4],             # 6번 노드와 연결된 노드들
    [7],                # 7번 노드와 연결된 노드들
    [2, 6, 8],          # 8번 노드와 연결된 노드들
    [1, 7]              # 9번 노드와 연결된 노드들
]


def DFS(graph, v, visited):
    # 현재 노드를 방문 처리
    visited[v] = True
    print(v, end = ' ')

    for i in graph[v]:
        if not visited[i]:
            DFS(graph, i, visited)
            print("hi")

# 현재 노드와 연결된 다른 노드를 재귀적으로 방문

DFS(graph, 1, visited)