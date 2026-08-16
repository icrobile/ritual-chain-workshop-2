# Bootcamp Level 2 – Learning Record

## Goal of the Workshop
Build and fully understand a prediction market that resolves itself without any off-chain keeper or admin key.

## Main Components
- RitualPredict.sol – the market contract
- Scheduler – system contract that wakes us
- HTTP precompile (0x0801)
- jq precompile (0x0803)
- TEEServiceRegistry – finds available executors
- RitualWallet – pays for the scheduled calls

## Resolution Logic in Plain Words
When the resolve block arrives:
1. Scheduler calls the contract
2. Contract asks for an HTTP-capable executor
3. It fetches the oracle page
4. jq pulls out the number we care about
5. The number is compared with the target
6. Market is marked YES, NO or Invalid
7. If it was the last attempt and still failed → Invalid

## Safety Features
- Three independent attempts
- Each attempt can use a different executor
- Failed reads never become a false NO
- Users can always get their stake back on Invalid
- No unbounded loops in claim logic

## Final Note
I went through the entire flow, the tests and the design decisions.  
The codebase is clean and ready for mainnet.
