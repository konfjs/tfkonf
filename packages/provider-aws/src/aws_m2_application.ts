import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsM2ApplicationArgsDefinition {
  content?: string;
  s3_location?: string;
}
export interface AwsM2ApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsM2ApplicationArgs {
  description?: string;
  engine_type: string;
  kms_key_id?: string;
  name: string;
  role_arn?: string;
  tags?: {
    [key: string]: string;
  };
  definition: AwsM2ApplicationArgsDefinition;
  timeouts: AwsM2ApplicationArgsTimeouts;
}
export class aws_m2_application extends TerraformResource {
  readonly application_id!: string;
  readonly arn!: string;
  readonly current_version!: number;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsM2ApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_m2_application");
  }
}