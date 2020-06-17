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

## To run the application

Navigate to the directory

deno run server.ts

## Trouble shooting

### Uncaught PermissionDenied network access: network access to "0.0.0.0:8000"

use this command to run the app.

> deno run --allow-net server.ts

### an error occurred trying to connect: invalid certificate: UnknownIssuer

Make sure you are not connected to a VPN if using personal system.
Try connecting to a VPN for corporate systems.

## Credits

[Deno](https://deno.land/)
