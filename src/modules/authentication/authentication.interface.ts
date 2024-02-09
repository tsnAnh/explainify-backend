export interface IAuthenticationService {
  signIn(email: string, password: string): Promise<string>;
}

export const AUTHENTICATION_SERVICE = 'AUTHENTICATION_SERVICE' as const;

export interface GetChallengeResponseDto {
  challenge: string;
}

export interface SignInRequestDto {
  username: string;
  password: string;
}

export interface SignInResponseDto {
  accessToken: string;
}
