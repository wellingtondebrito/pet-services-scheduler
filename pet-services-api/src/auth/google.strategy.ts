import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-google-oauth20';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserRole } from "@prisma/client";
import { AuthService } from "./auth.service";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(private readonly configService: ConfigService,
        private readonly authService: AuthService
    ){
        super({
            clientId: configService.get('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get('GOOGLE_SECRET'),
            callbackURL: 'http://localhost:3000/auth/google/callback'
        })
    }

    async validate (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const {id, name, emails} = profile;

        const user = {
            googleId: id,
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            role: UserRole.PET_OWNER,
            accessToken,
        }

        return user
    }
}