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

    suggestions(prefix) {
        let current = this.root
        for (let char of prefix) {
            if (!current.children[char]) {
                return ['']
            }
            current = current.children[char]
        }

        return this._suggestionHelper(current, prefix, [])
    }

    _suggestionHelper(root, currentPrefix, result = []) {
        if (root.isEnd) {
            result.push(currentPrefix)
        }

        for (let char in root.children) {
            this._suggestionHelper(root.children[char], currentPrefix + char, result)
        }

        return result
    }


}

const trie = new Trie()
trie.insert('apple')
trie.insert('application')
trie.insert('approve')
trie.insert('banana')
trie.insert('cherry')
console.log(trie.suggestions(''))
console.log(trie.suggestions('appr'))







