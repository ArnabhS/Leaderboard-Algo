Explanation of the Algorithm Implemented:

1. Fairness:
    a.Each voter's latest vote is only considered. If a voter submits a new vote, previous vote is removed from the participants total score.
    b.Scores are validated , they can only be within the range of 1 to 100.

2.Scalability:
    a.We can access the participants scores in O(1) time complexity.
    b.We can update the vote in O(1) time compexity.
    c.Sorting is done only when a new vote is added or a previous vote is updated and is done using Javascript built in sort function which is efficient.

3.Real-Time Updates:
    a.The updateRankings method is called after every vote to re-sort the rankings. This ensures leaderboard is always up to date.
    b.Current rankings also fetched in O(1) operation.

4.Handling Multiple votes:
    a.Multiple votes is being handled with only latest vote being considered for leaderboard.

5.Efficiency:
    Overall this algorithm is efficient and avoids recalculating votes from scratch. Instead it only updates the participants score.