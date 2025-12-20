class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEnd = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return console.log(false)
            }
            current = current.children[char];
        }
        return console.log(current.isEnd)
    }

    startWith(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return console.log('noo')
            }
            current = current.children[char]
        }
        return console.log('yess')
    }

    delete(word, index = 0, node = this.root) {
        if (index === word.length) {
            node.isEnd = false
            return !Object.entries(node.children).length
        }

        let char = word[index]
        let nextNode = node.children[char]

        let deleteNext = this.delete(word, index + 1, nextNode)

        if (deleteNext) {
            delete node.children[char]
            return !node.isEnd && !Object.entries(node.children).length
        }
    }

}

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");

trie.search('app')
trie.search('apple')
trie.search('applebanana')
trie.search('banana')

trie.startWith('ap')
trie.startWith('appleee')
trie.startWith('klkl')


trie.delete("apple");


require('fs').writeFileSync('output.json', JSON.stringify(trie))