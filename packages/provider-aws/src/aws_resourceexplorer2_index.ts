import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsResourceexplorer2IndexArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsResourceexplorer2IndexArgs {
  tags?: {
    [key: string]: string;
  };
  type: string;
  timeouts: AwsResourceexplorer2IndexArgstimeouts;
}
export class aws_resourceexplorer2_index extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsResourceexplorer2IndexArgs) {
    super(config, "resource", args, resourceName, "aws_resourceexplorer2_index");
  }
}