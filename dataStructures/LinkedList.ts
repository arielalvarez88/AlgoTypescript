export class LinkedList<T> {
    currentIdx: number;
    elements: T[];

    constructor(){
        this.currentIdx = 0;
        this.elements = [];
    }

    next(){
        return this.elements[this.currentIdx++];
    }

    append(node: T){
        this.elements.push(node);        
    }

    prepend(node: T){
        this.elements.unshift(node);
    }

    removeTail(){
        this.elements.pop();
    }

    removeHead(){
        this.elements.shift();
    }

    removeAt(idx: number){
        this.elements.splice(idx,1);
    }

    reset(){
        this.currentIdx = 0;
    }

}