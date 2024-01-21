class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEnd
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    display() {
        const words = [];
    
        const displayHelper = (node, currentWord) => {
            if (node.isEnd) {
                words.push(currentWord); 
            }
            
            for (let char in node.children) {
                displayHelper(node.children[char], currentWord + char);
            }
        };
        
        displayHelper(this.root, '');
    
        console.log(words);
      }
}

const trie=new Trie()
trie.insert('apple')
trie.insert('orange')
trie.insert('watermelon')
console.log(trie.search('apple'));
console.log(trie.search('app'));
console.log(trie.prefix('app'));
trie.display()




