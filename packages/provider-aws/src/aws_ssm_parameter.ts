import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmParameterArgs {
  allowed_pattern?: string;
  description?: string;
  name: string;
  overwrite?: boolean;
  tags?: {
    [key: string]: string;
  };
  type: string;
}
export class aws_ssm_parameter extends TerraformResource {
  readonly arn?: string;
  readonly data_type?: string;
  readonly id?: string;
  readonly insecure_value?: string;
  readonly key_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tier?: string;
  readonly value?: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmParameterArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_parameter");
  }
}