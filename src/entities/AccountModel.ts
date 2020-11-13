import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Transaction from "./TransactionModel";
import People from "./People";

/**
 * FIXME
 */
class Account {
  public id: string;
  public transactions: Transaction[];
  public name: string;
  public owner: People;
}

export default Account;
