import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the item returned from the serve', () => {

    // Arrange
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


  it('should call the server to save the changes when a new todo item is added', () => {

    // Arrange
    const spy = spyOn(service, 'add')
      .and
      .callFake(f => {
        return empty();
      });

    // Action
    component.add();

    // Assertion
    expect(spy).toHaveBeenCalled();

  });



  it('should add new todos return from the server', () => {

    // Arrange
    const todos = { id: 1 };

    /*
    spyOn(service, 'add')
      .and
      .callFake(f => {
        return from([todos]);
      });
*/

    /*Better way to do this*/
    spyOn(service, 'add')
      .and
      .returnValue(from([todos]));

    // Action
    component.add();

    // Assertion
    expect(component.todos.indexOf(todos)).toBeGreaterThan(-1);


  });


  it('should set the message property if server return an error when adding new todo', () => {

    // Arrange
    const error = 'Error from the server';
    spyOn(service, 'add')
      .and
      .returnValue(throwError(error));

    // Action
    component.add();

    // Assertion
    expect(component.message).toBe(error);


  });


  it('should call the server to delete todo items if user confirm', () => {

    // Arrange
    spyOn(window, 'confirm')
      .and
      .returnValue(true);

    const spy = spyOn(service, 'delete')
      .and
      .returnValue(empty());

    // Action
    component.delete(1);

    // Assertion
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1); // More specific


  });

  it('should NOT call the server to delete todo items if user cancels', () => {

    // Arrange
    spyOn(window, 'confirm')
      .and
      .returnValue(false);

    const spy = spyOn(service, 'delete')
      .and
      .returnValue(empty());

    // Action
    component.delete(1);

    // Assertion
    expect(spy).not.toHaveBeenCalled();



  });

});
