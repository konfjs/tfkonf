import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmActivationArgs {
  description?: string;
  iam_role: string;
  name?: string;
  registration_limit?: number;
  tags?: {
    [key: string]: string;
  };
}
export class aws_ssm_activation extends TerraformResource {
  readonly activation_code!: string;
  readonly expiration_date?: string;
  readonly expired!: boolean;
  readonly id?: string;
  readonly registration_count!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmActivationArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_activation");
  }
}