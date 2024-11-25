import { IsDate, IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';


export class Player {
    PlayerID: number;
    @IsDefined()
    @IsString()
    name: string;
    
    @IsDefined()
    @IsNumber()
    goalCount: number;
    @IsDefined()
    @IsDate()
    birthDate: Date;
    @IsOptional()
    @IsNumber()
    TeamID: number;
}
