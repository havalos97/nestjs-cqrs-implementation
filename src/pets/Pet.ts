import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class Pet extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private age: number,
    private readonly ownerName: string,
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getOwnerName(): string {
    return this.ownerName;
  }

  updateAge(age: number): void {
    this.age = age;
  }
}
