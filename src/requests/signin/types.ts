import { Request, Response } from 'types-vollab/dist/v2/auth/api/sign-in/POST'

export type TSignIn = (request: Request) => Promise<Response>
