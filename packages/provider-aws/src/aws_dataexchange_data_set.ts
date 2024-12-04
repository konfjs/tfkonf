import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDataexchangeDataSetArgs {
  asset_type: string;
  description: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_dataexchange_data_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDataexchangeDataSetArgs) {
    super(config, "resource", args, resourceName, "aws_dataexchange_data_set");
  }
}
