import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the item returned from the serve', () => {

    // Arrage
    const todos = [1, 2, 3, 4];
    spyOn(service, 'getTodos')
      .and
      .callFake(() => {
        return from([todos]);
      });

    // Action
    component.ngOnInit();

    // Assertion
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(4);
    expect(component.todos).toBe(todos);

  });
});
