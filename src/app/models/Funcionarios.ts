import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("funcionarios")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: true })
  nome: string;
  @Column()
  email: string;
  @Column()
  data_nascimento: Date;
  @Column()
  data_admissao: Date;
  @Column()
  setor: string;
  @Column()
  cargo: string;
  @Column()
  nome_filial: string;
  @Column()
  nivel: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;
}

export default User;
