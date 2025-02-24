class Leaderboard{
    constructor(){
        this.participants = new Map();
        this.votes = new Map();
        this.rankings = [];
    }

    addVote(voterId,participantId,score){
        if(score<1 || score >100){
            throw new Error("Score must be between 1 and 100")
        }

        if(this.votes.has(voterId)){
            const previousVote = this.votes.get(voterId);
            this.participants.get(previousVote.participantId).totalScore -= previousVote.score
        }
        if(!this.participants.has(participantId)){
            this.participants.set(participantId,{totalScore:0,voteCount:0});
        }
        const participant = this.participants.get(participantId);
        participant.totalScore += score;
        participant.voteCount +=1; this.votes.set(voterId, { participantId, score });

        this.updateRankings();
    }
    updateRankings(){
        this.rankings = Array.from(this.participants.entries())
      .sort((a, b) => b[1].totalScore - a[1].totalScore) 
      .map((entry, index) => ({
        participantId: entry[0],
        totalScore: entry[1].totalScore,
        rank: index + 1, 
    }));
    }
    getRankings() {
        return this.rankings;
    }
}


const leaderboard = new Leaderboard();

leaderboard.addVote("voter1", "participantA", 90);
leaderboard.addVote("voter2", "participantB", 85);
leaderboard.addVote("voter3", "participantA", 95);
leaderboard.addVote("voter1", "participantB", 80); 
leaderboard.addVote("voter1", "participantA", 95); 
leaderboard.addVote("voter4", "participantA", 99);
leaderboard.addVote("voter4", "participantA", 23);


console.log(leaderboard.getRankings());