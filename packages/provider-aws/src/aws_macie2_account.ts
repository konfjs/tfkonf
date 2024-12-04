import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2AccountArgs {
}

export class aws_macie2_account extends TerraformResource {
  readonly created_at!: string;
  readonly finding_publishing_frequency?: string;
  readonly id?: string;
  readonly service_role!: string;
  readonly status?: string;
  readonly updated_at!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2AccountArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_account");
  }
}
