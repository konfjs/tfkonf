import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerImageVersionArgs {
  base_image: string;
  image_name: string;
}
export class aws_sagemaker_image_version extends TerraformResource {
  readonly arn!: string;
  readonly container_image!: string;
  readonly id?: string;
  readonly image_arn!: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerImageVersionArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_image_version");
  }
}