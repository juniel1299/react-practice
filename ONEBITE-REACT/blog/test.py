MOD = 1000000007

def max_product(N, M):
    total_area = N * M
    if total_area == 0:
        return 0
    if total_area == 1:
        return 1

    # 3으로 나눈 몫과 나머지
    q = total_area // 3
    r = total_area % 3

    if r == 0:
        return pow(3, q, MOD)
    elif r == 1:
        if q >= 1:
            return (pow(3, q - 1, MOD) * 4) % MOD
        else:
            return 1  # total_area가 1인 경우
    else:  # r == 2
        return (pow(3, q, MOD) * 2) % MOD

# 입력
N, M = map(int, input().split())
print(max_product(N, M))