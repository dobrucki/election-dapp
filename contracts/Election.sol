pragma solidity >=0.5.1 <0.7.0;


contract Election {

    struct Candidate {
        bytes32 name;
        uint voteCount;
    }

    address owner;

    Candidate[] public candidates;

    constructor(bytes32[] memory _candidates) public {
        owner = msg.sender;
        for (uint i = 0; i < _candidates.length; i++) {
            candidates.push(Candidate(_candidates[i], 0));
        }
    }
}