import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateCursoInput {

  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;

  @Field(()=>String )
  @IsNotEmpty()
  fechaDeInicio:string;
  
  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
