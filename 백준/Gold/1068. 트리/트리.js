const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const n = +input[0];
    const parents = input[1].split(" ").map((el) => +el);
    const deleteNode = +input[2];

    // parents 초기값 -> 자기자신
    const isLeaf = Array.from({ length: n }, () => true);
    let deleteNodeParent = 0;
    parents.forEach((parent, idx) => {
      if (idx === deleteNode) deleteNodeParent = parent;
      if (parent === -1) return;
      isLeaf[parent] = false;
    });
    isLeaf[deleteNode] = false;

    const find = (node) => {
      const parent = parents[node];

      if (parent === -1) return false;
      else if (parent === deleteNode) return true;
      return find(parent);
    };

    // for i 는 0부터 leaf.length 까지
    for (let i = 0; i < isLeaf.length; i++) {
      if (!isLeaf[i]) continue;

      if (find(i)) isLeaf[i] = false;
    }

    let answer = isLeaf.filter((v) => v).length;

    let cnt = 0;
    for (const parent of parents) {
      if (parent === deleteNodeParent) {
        cnt++;
      }
    }
    if (cnt === 1 && deleteNodeParent > -1) answer++;

    console.log(Math.max(0, answer));

    process.exit();
  });
