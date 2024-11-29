import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticacheUserArgsAuthenticationMode {
  passwords?: string[];
  type: string;
}
export interface AwsElasticacheUserArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsElasticacheUserArgs {
  access_string: string;
  engine: string;
  no_password_required?: boolean;
  passwords?: string[];
  tags?: {
    [key: string]: string;
  };
  user_id: string;
  user_name: string;
  authentication_mode: AwsElasticacheUserArgsAuthenticationMode;
  timeouts: AwsElasticacheUserArgstimeouts;
}
export class aws_elasticache_user extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheUserArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_user");
  }
}