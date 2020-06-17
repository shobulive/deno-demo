# deno-demo

A Demo server app for Deno.
This server exposes 5 APIS for dummy data users.

C - create /api/v1/users POST

R - Read all /api/v1/users GET

R - Read one /api/v1/users/:id GET

U - Update /api/v1/users/:id PUT

D - Delete /api/v1/users/:id DELETE

Please install Deno before running this applications.

[Deno Installation Guide](https://deno.land/#installation)
Optional:

Install Denon

> \$ deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts

## To run the application

Navigate to the directory

deno run server.ts

## Trouble shooting

### Uncaught PermissionDenied network access: network access to "0.0.0.0:8000"

use this command to run the app.

> deno run --allow-net server.ts

if using denon use the following command

> denon run --allow-net server.ts

### an error occurred trying to connect: invalid certificate: UnknownIssuer

Make sure you are not connected to a VPN if using personal system.
Try connecting to a VPN for corporate systems.

## Available Libraries

[Deno standard libraries](https://deno.land/std)
[Deno third party libraries](https://deno.land/x)

## Credits

[Deno](https://deno.land/)
[Denon](https://deno.land/x/denon)
