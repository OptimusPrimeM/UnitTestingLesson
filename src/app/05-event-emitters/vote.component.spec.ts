import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raised voteChanged event when upVoted', () => {

    // Arrange
    let totalVotes = null;
    component.voteChanged.subscribe((tv) => {
      totalVotes = tv;
    });

    // Act
    component.upVote();

    // Assert
    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);

  });
});