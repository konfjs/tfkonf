import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNeptuneSubnetGroupArgs {
  description?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_neptune_subnet_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_subnet_group");
  }
}