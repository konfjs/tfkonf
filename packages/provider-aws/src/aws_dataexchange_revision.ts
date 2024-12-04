import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDataexchangeRevisionArgs {
  comment?: string;
  data_set_id: string;
  tags?: { [key: string]: string };
}

export class aws_dataexchange_revision extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly revision_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDataexchangeRevisionArgs) {
    super(config, "resource", args, resourceName, "aws_dataexchange_revision");
  }
}
