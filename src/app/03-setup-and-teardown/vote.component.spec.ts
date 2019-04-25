import { VoteComponent } from './vote.component';

/*
describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {

    // Assert
    const component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes when downvoted', () => {

    // Assert
    const component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);

  });

});

*/

/*Better way*/

let component: VoteComponent;

beforeEach(() => {

  // Arrange
  component = new VoteComponent();
});

describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes when downvoted', () => {

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);

  });

});
