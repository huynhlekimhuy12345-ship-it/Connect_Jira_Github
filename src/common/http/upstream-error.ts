import { HttpException, TooManyRequestsException, UnauthorizedException } from '@nestjs/common';

/**
 * Map an upstream GitHub/Jira HTTP status to the matching NestJS exception.
 *
 * 401 -> UnauthorizedException, 429 -> TooManyRequestsException,
 * any other status -> HttpException with that exact status.
 *
 * Purpose: a rate-limit (429) must surface as 429, never as 401,
 * so the team can tell "hết limit" apart from "token hết hạn / bị thu hồi".
 */
export function throwUpstreamError(status: number, message: string): never {
  if (status === 401) throw new UnauthorizedException(message);
  if (status === 429) throw new TooManyRequestsException(message);
  throw new HttpException(message, status);
}
