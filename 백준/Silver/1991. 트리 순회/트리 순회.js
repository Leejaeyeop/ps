const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

class Node {
  constructor(val, left, right) {
    this.val = val;
    this._left = left === "." ? null : left;
    this._right = right === "." ? null : right;
  }

  get left() {
    return this._left;
  }

  set left(value) {
    this._left = value === "." ? null : value;
  }

  get right() {
    return this._right;
  }

  set right(value) {
    this._right = value === "." ? null : value;
  }
}

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const n = +input[0];
    const nodes = {};

    for (let i = 0; i <= n; i++) {
      const [nodeVal, left, right] = input[i].split(" ");
      if (!nodes[nodeVal]) {
        nodes[nodeVal] = new Node(nodeVal, left, right);
      }
      nodes[nodeVal].left = left;
      nodes[nodeVal].right = right;

      if (left !== ".") {
        nodes[left] = new Node(left);
      }

      if (right !== ".") {
        nodes[right] = new Node(right);
      }
    }

    const traversal = (order, val) => {
      if (!val) return "";
      let res = "";
      const curNode = nodes[val];
      if (order === 1) {
        // 전위 루트 -> 왼 -> 오
        res =
          curNode.val +
          traversal(order, curNode.left) +
          traversal(order, curNode.right);
      } else if (order === 2) {
        // 중위 왼 -> 루 -> 오
        res =
          traversal(order, curNode.left) +
          curNode.val +
          traversal(order, curNode.right);
      } else {
        // 후위 왼 -> 오 -> 루트
        res =
          traversal(order, curNode.left) +
          traversal(order, curNode.right) +
          curNode.val;
      }
      return res;
    };

    console.log(traversal(1, "A"));
    console.log(traversal(2, "A"));
    console.log(traversal(3, "A"));

    process.exit();
  });
