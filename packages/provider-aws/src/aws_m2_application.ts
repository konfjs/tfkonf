import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsM2ApplicationArgsdefinition {
  content?: string;
  s3_location?: string;
}
export interface AwsM2ApplicationArgstimeouts {
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
  definition: AwsM2ApplicationArgsdefinition;
  timeouts: AwsM2ApplicationArgstimeouts;
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