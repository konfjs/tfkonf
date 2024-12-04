import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSyntheticsGroupArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_synthetics_group extends TerraformResource {
  readonly arn!: string;
  readonly group_id!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSyntheticsGroupArgs) {
    super(config, "resource", args, resourceName, "aws_synthetics_group");
  }
}
