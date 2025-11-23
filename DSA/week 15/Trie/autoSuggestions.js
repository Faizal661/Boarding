class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let current = this.root
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEnd = true
    }

    displayAllwords(root = this.root, prev = '', result = []) {
        let current = root
        if (current.isEnd) {
            result.push(prev)
        }

        for (let char in current.children) {
            this.displayAllwords(current.children[char], prev + char, result)
        }

        return result
    }

    suggestions(prefix) {
        let current = this.root
        for (let char of prefix) {
            if (!current.children[char]) {
                return ['']
            }
            current = current.children[char]
        }

        return this._suggestionHelper(prefix, current, [])
    }

    _suggestionHelper(currentPrefix, root, result = []) {
        if (root.isEnd) {
            result.push(currentPrefix)
        }

        for (let char in root.children) {
            this._suggestionHelper(currentPrefix + char, root.children[char], result)
        }

        return result
    }


}

const trie = new Trie()
trie.insert('apple')
trie.insert('application')
trie.insert('approve')
console.log(trie.displayAllwords())
console.log(trie.suggestions('appr'))







