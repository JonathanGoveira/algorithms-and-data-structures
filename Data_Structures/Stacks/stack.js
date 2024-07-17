class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return 'No elements in stack';
        return 'Top element: ' + this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    getItems() {
        return this.items;
    }
}

const stack = new Stack();

function printStackClear() {
    document.querySelector('#stack-print').innerText = '';
}

function pushStack() {
    const stackInput = document.querySelector('#stack-input').value;
    if (stackInput) {
        stack.push(stackInput);
        document.querySelector('#stack-input').value = '';
    }
    drawStack();
}

function popStack() {
    stack.pop();
    drawStack();
}

function peekStack() {
    clearPrintIfNeeded('Top element:');
    const printElement = document.querySelector('#stack-print');
    let textoPeek = stack.peek();
    if (!printElement.innerText) {
        printElement.innerText = `${textoPeek}`;
    } else {
        drawStack();
    }
}

function isEmptyStack() {
    clearPrintIfNeeded('true');
    clearPrintIfNeeded('false');
    const printElement = document.querySelector('#stack-print');
    const textoPrint = stack.isEmpty();
    if (!printElement.innerText) {
        printElement.innerText = `${textoPrint}`;
    } else {
        drawStack();
    }
}

function sizeStack() {
    clearPrintIfNeeded('Size');
    const printElement = document.querySelector('#stack-print');
    const textoPrint = stack.size();
    if (!printElement.innerText) {
        printElement.innerText = `${textoPrint}`;
    } else {
        drawStack();
    }
}

function drawStack() {
    printStackClear();
    const stackStructure = document.querySelector('.structure');
    stackStructure.innerHTML = '';
    const items = stack.getItems();
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item;
        stackStructure.appendChild(div);
    });
}

function clearPrintIfNeeded(text) {
    const printElement = document.querySelector('#stack-print');
    if (printElement.innerText.includes(text)) {
        printElement.innerText = '';
    }
}
