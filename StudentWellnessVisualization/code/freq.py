import math
import csv
data = [
    (1,1.3,0.8,1,2.12,4),
    (1,0.8,1.6,1.2,1.5,4),
    (3,1,2,1,4,4),
    (1.5,1.7,1.5,2,3,4),
    (0.8,1.2,1.5,1.3,3,4),
    (0.5,2.3,1,1.7,3.1,1),
    (2.7,2.2,3,3.1,4,1),
    (1.5,1.2,1,2.5,4,1),
    (2.5,0.5,1,2,4,1),
    (2.5,1,1.5,1.2,3,1),
    (2,2,3,2,2.8,3),
    (0.3,0.5,0.7,1.5,2.5,3),
    (2,1,1.7,1,3,3),
    (1.5,2,3.7,1,3,3),
    (0.2,2,3,1,3.8,3),
    (2,1,1,1.5,4,3),
    (0,1.2,3.7,1.8,3.5,3),
    (0.5,1.7,1.7,0.5,2.5,2),
    (0,4,4,2,4,2),
    (2,2,3,2,4,2),
    (1,1,2,2.5,3,2),
    (3.5,1.5,2.5,2.5,3.8,2)
]

radius = 61.5

def count(lst):
    target = sorted(lst)
    target.reverse()
    freq = {}
    for e in target:
        if e in freq.keys():
            freq[e]+=1
        else:
            freq[e] = 1
    result = {k:math.sqrt(v)*radius for (k,v) in freq.items()}
    return result

def formatPrint(dic):
    for (k,v) in dic.items():
        print (k,' : ',v)


def dicgen(persona,activity):
    result = {}
    for e in data:
        if (e[-1] == persona or persona == 0):
            if e[activity] in result.keys() :
                result[e[activity]] += 1
            else:
                result[e[activity]] = 1
    return result
def foo():
    for persona in range(5):
        for action in range(5):
            print("persona:",persona,"action:",action+1)
            table = {k: v for k, v in sorted(dicgen(persona,action).items(), key=lambda item: item[0])}
            for (val,freq) in table.items():
                print(f'q2da{action+1}p{persona}f{freq}s{val:.2f}')

print(f'{(math.sqrt(2)*radius)}')
print(f'{(math.sqrt(3)*radius)}')
print(f'{(math.sqrt(4)*radius)}')
print(f'{(math.sqrt(5)*radius)}')
print(f'{(math.sqrt(6)*radius)}')
print(f'{(math.sqrt(7)*radius)}')