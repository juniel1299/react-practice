import sys

input = sys.stdin.readline

# 보드 생성
green = [[0]*4 for _ in range(6)]
blue = [[0]*6 for _ in range(4)]

score = 0

def drop_on_green(t, x, y):
    # 초록색 보드: 아래로 이동
    if t == 1:  # 1x1 블록
        r = 0
        while r+1 < 6 and green[r+1][y] == 0:
            r += 1
        green[r][y] = 1
    elif t == 2:  # 가로 2칸 블록
        r = 0
        while r+1 < 6 and green[r+1][y] == 0 and green[r+1][y+1] == 0:
            r += 1
        green[r][y], green[r][y+1] = 1, 1
    elif t == 3:  # 세로 2칸 블록
        r = 0
        while r+2 < 6 and green[r+2][y] == 0:
            r += 1
        green[r][y], green[r+1][y] = 1, 1

def drop_on_blue(t, x, y):
    # 파란색 보드: 오른쪽으로 이동
    if t == 1:
        c = 0
        while c+1 < 6 and blue[x][c+1] == 0:
            c += 1
        blue[x][c] = 1
    elif t == 2:
        c = 0
        while c+2 < 6 and blue[x][c+1] == 0 and blue[x][c+2] == 0:
            c += 1
        blue[x][c], blue[x][c+1] = 1, 1
    elif t == 3:
        c = 0
        while c+1 < 6 and blue[x][c+1] == 0 and blue[x+1][c+1] == 0:
            c += 1
        blue[x][c], blue[x+1][c] = 1, 1

def clear_green():
    global score
    # 가득 찬 행 제거
    lines_cleared = 0
    for i in range(5, -1, -1):
        if sum(green[i]) == 4:
            score += 1
            green.pop(i)
            green.insert(0, [0, 0, 0, 0])
            lines_cleared += 1

    # 연한 구역 처리
    soft_lines = sum(1 for i in [0, 1] if sum(green[i]) > 0)
    for _ in range(soft_lines):
        green.pop(-1)
        green.insert(0, [0, 0, 0, 0])

def clear_blue():
    global score
    # 가득 찬 열 제거
    lines_cleared = 0
    for j in range(5, -1, -1):
        if sum(blue[i][j] for i in range(4)) == 4:
            score += 1
            for i in range(4):
                for k in range(j, 0, -1):
                    blue[i][k] = blue[i][k-1]
                blue[i][0] = 0
            lines_cleared += 1

    # 연한 구역 처리
    soft_cols = sum(1 for j in [0, 1] if sum(blue[i][j] for i in range(4)) > 0)
    for _ in range(soft_cols):
        for i in range(4):
            for j in range(5, 0, -1):
                blue[i][j] = blue[i][j-1]
            blue[i][0] = 0

def count_blocks():
    return sum(sum(row) for row in green) + sum(sum(row) for row in blue)


n = int(input())
for _ in range(n):
    t, x, y = map(int, input().split())

    # 블록 추가
    drop_on_green(t, x, y)
    drop_on_blue(t, x, y)

    # 점수 계산
    clear_green()
    clear_blue()

# 최종 출력
print(score)
print(count_blocks())