pragma solidity >=0.5.1 <0.7.0;


contract Election {

    struct Candidate {
        string name;
        uint voteCount;
    }

    struct Voter {
        bool voted;
    }

    address public owner;

    mapping (uint => Candidate) public candidates;

    uint public candidatesCount;

    mapping (address => Voter) public voters;

    function addCandidate(string memory _name) private {
        candidatesCount += 1;
        candidates[candidatesCount] = Candidate(_name, 0);
    }

    constructor() public {
        owner = msg.sender;
        addCandidate("Kasia");
        addCandidate("Mirek");
    }
}