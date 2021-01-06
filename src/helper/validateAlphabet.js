const validateAlphabet = char => {
  const alphabets = {
    a: 1, A: 1,
    b: 1, B: 1,
    c: 1, C: 1,
    d: 1, D: 1,
    e: 1, E: 1,
    f: 1, F: 1,
    g: 1, G: 1,
    h: 1, H: 1,
    i: 1, I: 1,
    j: 1, J: 1,
    k: 1, K: 1,
    l: 1, L: 1,
    m: 1, M: 1,
    n: 1, N: 1,
    o: 1, O: 1,
    p: 1, P: 1,
    q: 1, Q: 1,
    r: 1, R: 1,
    s: 1, S: 1,
    t: 1, T: 1,
    u: 1, U: 1,
    v: 1, V: 1,
    w: 1, W: 1,
    x: 1, X: 1,
    y: 1, Y: 1,
    z: 1, Z: 1,
  }

  if (alphabets[char]) return true;
  return false;
};

export default validateAlphabet;