import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRekognitionProjectArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsRekognitionProjectArgs {
  feature?: string;
  name: string;
  timeouts: AwsRekognitionProjectArgstimeouts;
}
export class aws_rekognition_project extends TerraformResource {
  readonly arn!: string;
  readonly auto_update?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRekognitionProjectArgs) {
    super(config, "resource", args, resourceName, "aws_rekognition_project");
  }
}