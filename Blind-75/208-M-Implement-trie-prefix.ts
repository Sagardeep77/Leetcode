// https://leetcode.com/problems/implement-trie-prefix-tree/sclass TrieNode{
class TrieNode {
  public key: string;
  public children: TrieNode[];
  public isThisEnd: boolean;

  constructor(key) {
    this.key = key;
    this.children = new Array(26).fill(null);
    this.isThisEnd = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word: string): void {
    let currNode = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - 97;
      if (currNode.children[index] === null) {
        currNode.children[index] = new TrieNode(char);
      }
      currNode = currNode.children[index];
    }
    currNode.isThisEnd = true;
  }

  search(word: string): boolean {
    let currNode = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - 97;
      if (currNode.children[index] === null) {
        return false;
      } else currNode = currNode.children[index];
    }
    if (currNode.isThisEnd) return true;
    return false;
  }

  startsWith(prefix: string): boolean {
    let currNode = this.root;
    for (const char of prefix) {
      const index = char.charCodeAt(0) - 97;
      if (currNode.children[index] === null) {
        return false;
      } else currNode = currNode.children[index];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
