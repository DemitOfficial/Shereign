import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarRating } from './bar-rating';
import { BarRatingPipe } from './bar-rating.pipe';
export class BarRatingModule {
}
BarRatingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BarRating, BarRatingPipe],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [BarRating]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXJhdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvdXNsaS9EZXNrdG9wL3VudGl0bGVkIGZvbGRlci9uZXctcHJvL3Byb2plY3RzL25neC1iYXItcmF0aW5nL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9iYXItcmF0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVbEQsTUFBTSxPQUFPLGVBQWU7OztZQVIzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQztnQkFDeEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmFyUmF0aW5nIH0gZnJvbSAnLi9iYXItcmF0aW5nJztcbmltcG9ydCB7IEJhclJhdGluZ1BpcGUgfSBmcm9tICcuL2Jhci1yYXRpbmcucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JhclJhdGluZywgQmFyUmF0aW5nUGlwZV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0JhclJhdGluZ11cbn0pXG5leHBvcnQgY2xhc3MgQmFyUmF0aW5nTW9kdWxlIHtcbn1cbiJdfQ==