import { Pipe } from '@angular/core';
export class BarRatingPipe {
    transform(value = 0, titles) {
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    }
}
BarRatingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'rateTitle'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXJhdGluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb3VzbGkvRGVza3RvcC91bnRpdGxlZCBmb2xkZXIvbmV3LXByby9wcm9qZWN0cy9uZ3gtYmFyLXJhdGluZy9zcmMvIiwic291cmNlcyI6WyJsaWIvYmFyLXJhdGluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxhQUFhO0lBRXhCLFNBQVMsQ0FBQyxRQUFnQixDQUFDLEVBQUUsTUFBWTtRQUN2QyxtREFBbUQ7UUFDbkQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFSRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3JhdGVUaXRsZSdcbn0pXG5leHBvcnQgY2xhc3MgQmFyUmF0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyID0gMCwgdGl0bGVzPzogYW55KTogc3RyaW5nIHtcbiAgICAvKiogSW5pdGlhbGl6ZSB2YWx1ZSB3aXRoIDAgaW4gY2FzZSBvZiB1bmRlZmluZWQgKi9cbiAgICByZXR1cm4gdGl0bGVzW3ZhbHVlXSB8fCB2YWx1ZSArIDE7XG4gIH1cblxufVxuIl19