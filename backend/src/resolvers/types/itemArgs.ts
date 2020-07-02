import { Min, Max } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";

import { perPage } from "../../../../frontend/config";

@ArgsType()
export class ItemsArgs {
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  skip: number;

  @Field(() => Int, { defaultValue: perPage })
  @Min(1)
  @Max(200)
  take: number;

  // helpers - index calculations
  get startIndex(): number {
    return this.skip;
  }
  get endIndex(): number {
    return this.skip + this.take;
  }
}
