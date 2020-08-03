# Question 2 Labeling Guide

[TOC]

## Todo

    * background decoration
    * custom write-out graph
    * element labeling 

## Label rule

The format of label should be:
        ```     a[activity#]-p[persona#]-f[frequency#]-s[stressValue]```
The example would be:

​      ```a1-p1-f4-s0_5```

Since ```.``` is a special character so ```0.5``` will be translated into ```0_5```

__only circle needs to be labeled__ 

## Frequency calculation

The formula is:
$$
f = (\frac{radius}{82})^2
$$


For convenience, all possible values is here:

| radius             | frequency |
| ------------------ | --------- |
| 0.0                | 0         |
| 82.0               | 1         |
| 115.9655121145938  | 2         |
| 142.02816622064793 | 3         |
| 164.0              | 4         |
| 183.35757415498276 | 5         |
| 200.8581589082206  | 6         |
| 216.95160750729644 | 7         |
| 231.9310242291876  | 8         |
| 246.0              | 9         |

