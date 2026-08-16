# Detailed Learning Notes – Bootcamp Level 2

## Architecture Summary
The system has four main actors:
1. Users who create markets and place bets
2. Ritual Scheduler (system contract)
3. HTTP + jq precompiles running inside TEE
4. RitualWallet that pays for the scheduled execution

## Step-by-step Resolution Flow
1. At the scheduled block the Scheduler calls onScheduledResolve
2. The contract picks an available HTTP executor
3. It sends a GET request to the oracle URL
4. The response is passed to the jq precompile
5. A single number is extracted
6. The number is compared with the target using the chosen comparator
7. Market state is updated
8. If all three attempts fail, the market becomes Invalid and everyone can refund

## Why this design is solid
- No reliance on block.timestamp (which is milliseconds on Ritual)
- Multiple attempts protect against temporary failures
- Invalid status is safer than forcing a wrong outcome
- Pull-based claims avoid gas griefing
- Everything stays on-chain and verifiable

## Personal Takeaway
This workshop shows what becomes possible when a chain has native scheduling and secure off-chain data access.  
I now understand the full flow and the important safety decisions.  
The code is ready for mainnet.
