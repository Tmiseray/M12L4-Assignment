// Browsing History Stack

class BrowsingHistory {
    constructor() {
        this.history = []
        this.break = '-'
    }

    addPage(page) {
        this.history.push(page);
    }

    pop() {
        if (!this.isEmpty()) {
            const removedPage = this.history.pop();
            console.log(`\n** Removed Page from History: \n   - ${removedPage}`);
            console.log(this.break.repeat(21));
        }
    }

    peekLastPage() {
        if (!this.isEmpty()) {
            let peekPage = this.history[this.history.length - 1];
            console.log(`\n* Last Page Visited: \n   - ${peekPage}`);
            console.log(this.break.repeat(21));
            return
        }
    }

    isEmpty() {
        return this.history.length === 0;
    }

    size() {
        return this.history.length;
    }

    displayHistory() {
        if (this.isEmpty()) {
            console.log('\n ~ No browsing history to display.\n ')
        } else {
            console.log('\n Browsing Histroy: \n');
            this.history.forEach(page => {
                let i = 1;
                console.log(`${i}: ${page}`);
                i++;
            });
            console.log(this.break.repeat(21));
        }
    }
}

const history = new BrowsingHistory();

history.displayHistory();

history.addPage('www.google.com');
history.addPage('www.codingtemple.com');
history.addPage('www.netflix.com');
history.addPage('www.hulu.com');

const empty = history.isEmpty();
console.log(`\nEmpty Browsing History?\n\t- ${empty}`);
console.log(('-').repeat(21));

const size = history.size();
console.log(`\nPages in Browsing History: ${size}`);

history.displayHistory();

history.peekLastPage();

history.pop();

history.displayHistory();