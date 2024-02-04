//https://leetcode.com/problems/design-add-and-search-words-data-structure/

class DictionaryNode {
    private key: string;
    private children: DictionaryNode[];
    private isThisEnd: boolean;
  
    constructor(key: string) {
      this.key = key;
      this.children = new Array(26).fill(null);
      this.isThisEnd = false;
    }
  
    setChildren(index: number, node: DictionaryNode) {
      this.children[index] = node;
    }
  
    getChildren() {
      return this.children;
    }
  
    getChildrenAt(index: number) {
      return this.children[index];
    }
  
    setEnd() {
      this.isThisEnd = true;
    }
  
    getEnd() {
      return this.isThisEnd;
    }
  }
  
  class WordDictionary {
    private root: DictionaryNode;
    constructor() {
      this.root = new DictionaryNode("");
    }
  
    addWord(word: string): void {
      let currNode = this.root;
      for (const char of word) {
        const index = char.charCodeAt(0) - 97;
        if (currNode.getChildrenAt(index) === null) {
          currNode.setChildren(index, new DictionaryNode(char));
        }
        currNode = currNode.getChildrenAt(index);
      }
      currNode.setEnd();
    }
  
    search(word: string): boolean {
      const searchHelper = function (
        root: DictionaryNode | null,
        searchStr: string
      ): boolean {
        if (root === null) return false;
        if (root.getEnd() && searchStr.length === 0) return true;
          if(searchStr.length == 0) return false
        const firstChar = searchStr[0];
        if (firstChar === ".") {
          for (const child of root.getChildren()) {
            if (child !== null && searchHelper(child, searchStr.substring(1))) {
              return true;
            }
          }
          return false;
        }
        const index = firstChar.charCodeAt(0) - 97;
  
        return searchHelper(root.getChildrenAt(index), searchStr.substring(1));
      };
  
      return searchHelper(this.root, word);
    }
  }
  
  /**
   * Your WordDictionary object will be instantiated and called as such:
   * var obj = new WordDictionary()
   * obj.addWord(word)
   * var param_2 = obj.search(word)
   */
  