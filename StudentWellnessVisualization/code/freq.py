import math
import csv

radius = 82

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

print ("|radius | frequency|")
print ("|------ | ---------|")
for i in range(10):
    print ("|",math.sqrt(i)*radius ," | ",i,"|")