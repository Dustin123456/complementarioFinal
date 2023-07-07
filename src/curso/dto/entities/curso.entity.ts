import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'cursos'})
@ObjectType()
export class Curso {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    descripcion:string;

    @Column()
    @Field(()=>String)
    fechaDeInicio:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
