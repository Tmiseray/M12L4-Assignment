# Browsing History Stack

class BrowsingHistory:
    def __init__(self):
        self.history = []

    def add_page(self, page):
        self.history.append(page)

    def pop(self):
        if not self.is_empty():
            removed_page = self.history.pop()
            print(f'\n** Removed Page from History: \n   - {removed_page}')
            print(21 * '-')
        
    def peek_last_page(self):
        if not self.is_empty():
            peek_page = self.history[-1]
            print(f'\n* Last Page Visited: \n   - {peek_page}')
            print(21 * '-')
            return
        
    def is_empty(self):
        return len(self.history) == 0
    
    def size(self):
        return len(self.history)
    
    def display_history(self):
        if self.is_empty():
            print('\n ~ No browsing history to display.\n ')
        else:
            print('\n Browsing History: \n')
            for i, page in enumerate(self.history, start=1):
                print(f'{i}: {page}')
            print(21 * '-')


history = BrowsingHistory()

history.display_history()

history.add_page('www.google.com')
history.add_page('www.codingtemple.com')
history.add_page('www.netflix.com')
history.add_page('www.hulu.com')

empty = history.is_empty()
print(f'\nEmpty Browsing History? \n\t- {empty}')
print(21 * '-')

size = history.size()
print(f'\nPages in Browsing History: {size}')
print(21 * '-')

history.display_history()

history.peek_last_page()

history.pop()

history.display_history()

    

