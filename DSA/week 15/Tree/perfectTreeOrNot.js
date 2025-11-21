
function isPerfect(root) {
    if (root === null) {
        return true;
    }

    let depth = 0;
    let temp = root;
    while (temp !== null) {
        depth++;
        temp = temp.left;
    }

    depth = depth - 1;

    return isPerfectHelper(root, depth, 0);
}


function isPerfectHelper(node, depth, level) {
    if (node === null) {
        return true;
    }

    if (node.left === null && node.right === null) {
        return level === depth;
    }

    if (node.left === null || node.right === null) {
        return false;
    }

    return isPerfectHelper(node.left, depth, level + 1) &&
        isPerfectHelper(node.right, depth, level + 1);
}