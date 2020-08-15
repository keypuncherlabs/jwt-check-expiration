# jwt-check-expiration

## Purpose

Determine if a JWT is expired in the client without requiring a secret, this is for client use only and not intended for secure validation of the JWT. Only as a convenience method to avoid a network call if the JWT has indicated that it has expired.

## Installation

`npm install jwt-check-expiration`

## Usage

Determine if the JWT has expired in the client application when no validation is required and you do not want to expose the secret.

## Parameters

JWT Token

## Example

```js
import { isJwtExpired } from 'jwt-check-expiration';

console.log('isExpired is:', isJwtExpired('your-token-here'));
```
