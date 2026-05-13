---
title: "ECDSA: Detecting the Reuse of k"
date: 2023-11-22
tags: ["cryptography"]
---

Many people are familiar with the PS3 exploit discovered in 2010 by the fail0Overflow group. This exploit was the result of Sony reusing the value $k$ in their implementation of the Elliptic Curve Digital Signature Algorithm. By reusing the value for $k$, the private key can be directly calculated (the details of which can be seen [here](https://www.youtube.com/watch?v=LP1t_pzxKyE))

But the answer to "how do you detect $k$ being reused" isn't as prevalent. In order to detect that $k$ is being used, we can take advantage of the nature of elliptic curves in $\mathbb{Z}_p$ for some prime $p$.

We know that the value signature $(r, s)$ can be expressed as:
1. $r = x_{kP} \mod q$
2. $s = \frac{H(m) + \alpha r}{k} \mod q$

where:
- $x_{kP}$ is the x value of the scalar multiplication of $k$ and the generator point $P$ on the elliptic curve of order $q$.
- $H(m)$ is the hash of the message.
- $\alpha$ is such that $\alpha P$ is the public key and $\alpha$ is the private key.
- $q$ is the prime for which $\alpha, k \in_R \mathbb{Z}^*_q$.

Notice that $r$ does not change if $k$ is kept the same 👀. This isn't enough to conclude that the same $k$ is being used, but it is the first indicator. If we see the same $r$ value three separate times, we can guarantee that at least two of those signatures used the same value for $k$.

We can do this because **there are at most two points which have the same x-value in an elliptic curve in $\mathbb{Z}_p$ for some prime $p$**. Note that taking $\mod q$ doesn't increase the possible number of values.

Then, the steps used in actual break can be done with three pairs to determine three possible private keys.

Then, using knowledge about the components of each $s$, you can try each guess for $\alpha$ until you are reduced to only one that works for all $s$. In the worst case, you would be left with three guesses for a while 🤷.
