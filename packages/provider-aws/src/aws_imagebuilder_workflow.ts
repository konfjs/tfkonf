import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsImagebuilderWorkflowArgs {
  change_description?: string;
  description?: string;
  kms_key_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  uri?: string;
  version: string;
}
export class aws_imagebuilder_workflow extends TerraformResource {
  readonly arn!: string;
  readonly data?: string;
  readonly date_created!: string;
  readonly id?: string;
  readonly owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderWorkflowArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_workflow");
  }
}