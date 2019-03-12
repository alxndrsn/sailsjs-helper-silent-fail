# helper-silent-fail

## Usage

```
sails lift
curl localhost:1337/async
curl localhost:1337/sync
```

## Observed

Check the logs of the terminal with `sails lift` running in it.  Only the first request will cause log output.

Check the terminal where you ran `curl`.  Both requests receive response `OK`.
