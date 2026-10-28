---
title: "ECDSA: Detecting the Reuse of k"
date: 2023-11-22
tags: ["cryptography", "post"]
---

Many people are familiar with the PS3 exploit discovered in 2010 by the fail0Overflow group. This exploit was the result of Sony reusing the value $k$ in their implementation of the Elliptic Curve Digital Signature Algorithm. By reusing the value for $k$, the private key can be directly calculated (the details of which can be seen [here](https://www.youtube.com/watch?v=LP1t_pzxKyE))

But the answer to "how do you detect $k$ being reused" isn't as prevalent. In order to detect that $k$ is being reused, we can take advantage of the nature of elliptic curves in $\mathbb{Z}_p$ for some prime $p$.

We know that the signature $(r, s)$ can be expressed as:
1. $r = x_{kP} \mod q$
2. $s = k^{-1}(h + \alpha r) \mod q$

where:
- $x_{kP}$ is the x value of the scalar multiplication of $k$ and the generator point $P$. The curve is defined over $\mathbb{Z}_p$, while $P$ has prime order $q$.
- $h$ is the integer derived from the message hash $H(m)$, truncated to the bit length of $q$ when necessary and used modulo $q$.
- $\alpha$ is such that $\alpha P$ is the public key and $\alpha$ is the private key.
- $\alpha, k \in \mathbb{Z}^*_q$, and $r$ and $s$ must be nonzero.

Here’s our first clue: $r$ does not change if $k$ stays the same. This isn't enough to conclude that the same $k$ is being used, but it is the first indicator.

There are at most two points which have the same x-value on the usual short-Weierstrass curves over $\mathbb{Z}_p$ for an odd prime $p$. However, taking $\mod q$ can make different x-values produce the same $r$. So seeing the same $r$ three times does not guarantee that $k$ was reused.

For two signatures from the same key with the same $r$, we can test the assumption that $k$ was reused. Subtracting their signature equations gives $(s_1-s_2)k = h_1-h_2 \mod q$, so:

$$
k = (h_1-h_2)(s_1-s_2)^{-1} \mod q, \qquad
\alpha = (s_1k-h_1)r^{-1} \mod q.
$$

This requires $s_1 \ne s_2 \mod q$ and different $h_1$ and $h_2$ modulo $q$; collecting the same signature repeatedly does not help. The inverses are modular inverses modulo $q$. Since $k$ and $q-k$ also produce the same $r$, we should also try replacing $s_2$ with $-s_2$ when the resulting denominator is nonzero.

Then, you can check each candidate against the known public key: compute $\alpha P$ and see whether it matches. A candidate nonce must also be nonzero and produce the observed $r$.

With three signatures sharing $r$, we have three pairs to try. Testing $k$ and $q-k$ gives us at most six candidate private keys before filtering. At most one will match the public key.
