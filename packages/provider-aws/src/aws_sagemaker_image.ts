import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerImageArgs {
  description?: string;
  display_name?: string;
  image_name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_sagemaker_image extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerImageArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_image");
  }
}