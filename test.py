import os

def fib(n: int) -> int:
    return n if n < 2 else fib(n-1) + fib(n-2)

def test_fibonacci():
    return fib(int(os.environ["FIB_INPUT"])) == 55

print(test_fibonacci())